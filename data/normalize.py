#!/usr/bin/env python3
"""Normalize raw API snapshots into a clean JSON dataset for the Next.js site."""
import json
import re
import html
from pathlib import Path

DATA = Path(__file__).parent

def strip_html(s: str) -> str:
    if not s:
        return ""
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)
    s = re.sub(r"\s+", " ", s).strip()
    return s

def clean_title(s: str) -> str:
    s = html.unescape(s or "").strip()
    s = re.sub(r"\s+", " ", s)
    return s

def parse_product_blocks(desc_html: str) -> dict:
    """Extract Application / Resultats / Ingredients sections from Elementor HTML."""
    plain = strip_html(desc_html)
    sections = {"intro": "", "application": "", "resultats": "", "ingredients": "", "claims": []}
    # Heuristics on capitalised section headers
    parts = re.split(r"\b(APPLICATION|R[ÉE]SULTATS?|INGR[ÉE]DIENTS?|EN SAVOIR PLUS SUR CE PRODUIT)\b", desc_html, flags=re.I)
    if len(parts) > 1:
        sections["intro"] = strip_html(parts[0])
        for i in range(1, len(parts) - 1, 2):
            label = parts[i].lower()
            content = strip_html(parts[i + 1])
            if label.startswith("application"):
                sections["application"] = content
            elif label.startswith("résultat") or label.startswith("resultat"):
                sections["resultats"] = content
            elif label.startswith("ingrédient") or label.startswith("ingredient"):
                sections["ingredients"] = content
    else:
        sections["intro"] = plain[:600]

    # detect common claims
    plain_lower = plain.lower()
    for kw, label in [
        ("sans paraben", "Sans paraben"),
        ("sans sulfate", "Sans sulfates"),
        ("dermatologique", "Testé dermatologiquement"),
        ("hypoallergénique", "Hypoallergénique"),
        ("acide hyaluronique", "Acide hyaluronique"),
        ("niacinamide", "Niacinamide"),
        ("vitamine b", "Complexe vitamine B"),
        ("nigelle", "Graines de nigelle"),
        ("aloe vera", "Aloe vera"),
        ("argile", "Argile"),
        ("recyclable", "Packaging recyclable"),
    ]:
        if kw in plain_lower and label not in sections["claims"]:
            sections["claims"].append(label)

    return sections

def normalize_products() -> list[dict]:
    out = []
    seen_ids = set()
    for p in range(1, 5):
        path = DATA / f"products_p{p}.json"
        if not path.exists():
            continue
        for prod in json.load(open(path)):
            if prod["id"] in seen_ids:
                continue
            seen_ids.add(prod["id"])
            cats = [{"id": c["id"], "name": clean_title(c["name"]), "slug": c["slug"]} for c in prod.get("categories", [])]
            images = [{"src": img["src"], "alt": img.get("alt") or "", "thumb": img.get("thumbnail") or img["src"]} for img in (prod.get("images") or [])]
            blocks = parse_product_blocks(prod.get("description") or "")
            out.append({
                "id": prod["id"],
                "name": clean_title(prod["name"]),
                "slug": prod["slug"],
                "permalink": prod.get("permalink"),
                "image": images[0]["src"] if images else None,
                "images": images[:6],
                "categories": cats,
                "short": strip_html(prod.get("short_description") or ""),
                "intro": blocks["intro"],
                "application": blocks["application"],
                "resultats": blocks["resultats"],
                "ingredients": blocks["ingredients"],
                "claims": blocks["claims"],
                "in_stock": prod.get("is_in_stock", True),
                "rating": prod.get("average_rating") or "0",
                "reviews": prod.get("review_count", 0),
            })
    return out

def normalize_categories() -> list[dict]:
    cats = json.load(open(DATA / "categories.json"))
    return [
        {
            "id": c["id"],
            "parent": c["parent"],
            "name": clean_title(c["name"]),
            "slug": c["slug"],
            "count": c["count"],
            "description": strip_html(c.get("description") or ""),
        }
        for c in cats
        if c["name"] not in ("Uncategorized", "Non classé")
    ]

def normalize_posts() -> list[dict]:
    posts = json.load(open(DATA / "posts.json"))
    out = []
    for p in posts:
        title = clean_title(p["title"]["rendered"])
        if not title or "protection des donn" in title.lower():
            continue
        og = p.get("yoast_head_json", {}).get("og_image") or []
        image = og[0]["url"] if og else None
        out.append({
            "id": p["id"],
            "slug": p["slug"],
            "title": title,
            "date": p["date"][:10],
            "excerpt": strip_html(p.get("excerpt", {}).get("rendered", ""))[:300],
            "content": strip_html(p.get("content", {}).get("rendered", "")),
            "link": p.get("link"),
            "image": image,
        })
    return out

if __name__ == "__main__":
    products = normalize_products()
    categories = normalize_categories()
    posts = normalize_posts()
    out = {"products": products, "categories": categories, "posts": posts}
    target = DATA / "site.json"
    target.write_text(json.dumps(out, ensure_ascii=False, indent=2))
    print(f"Wrote {target}: {len(products)} products, {len(categories)} categories, {len(posts)} posts")

    # Also write a minimal map for build-time imports
    (DATA / "products.json").write_text(json.dumps(products, ensure_ascii=False))
    (DATA / "categories.normalized.json").write_text(json.dumps(categories, ensure_ascii=False))
    (DATA / "posts.normalized.json").write_text(json.dumps(posts, ensure_ascii=False))
