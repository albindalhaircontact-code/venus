import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";

export function ProductCard({
  product,
  size = "md",
  variant = "light",
}: {
  product: Product;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}) {
  const cat = product.categories[0];
  const isDark = variant === "dark";
  return (
    <Link href={`/produit/${product.slug}`} className="group block">
      <div
        className={`relative overflow-hidden ${
          size === "lg" ? "aspect-[4/5]" : "aspect-square"
        } ${isDark ? "bg-white/5" : "bg-ivory-dark/40"}`}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-contain p-6 transition-transform duration-700 ease-venus group-hover:scale-105"
            unoptimized
          />
        ) : (
          <div
            className={`absolute inset-0 grid place-items-center font-display text-xl ${
              isDark ? "text-white/30" : "text-navy/30"
            }`}
          >
            Vénus
          </div>
        )}
        <span
          className={`absolute top-3 left-3 text-[10px] tracking-widest uppercase font-medium px-2 py-1 backdrop-blur ${
            isDark
              ? "text-white/70 bg-black/40"
              : "text-navy/60 bg-ivory/80"
          }`}
        >
          {cat?.name ?? "Vénus"}
        </span>
      </div>
      <div className="pt-4">
        <h3
          className={`font-display text-lg lg:text-xl leading-tight transition line-clamp-2 ${
            isDark
              ? "text-white group-hover:text-[var(--univ-accent-2)]"
              : "text-navy group-hover:text-terracotta"
          }`}
        >
          {prettyName(product.name)}
        </h3>
        {product.short && (
          <p
            className={`text-[13px] mt-1 line-clamp-2 font-sans ${
              isDark ? "text-white/55" : "text-ink/60"
            }`}
          >
            {product.short}
          </p>
        )}
      </div>
    </Link>
  );
}

export function prettyName(raw: string): string {
  // Convert ALL-CAPS to title case for readability while keeping brand markers
  if (!raw) return "";
  const lower = raw.toLowerCase();
  // Capitalise first letter of each word
  return lower.replace(/\b([a-zA-ZÀ-ÿ])/g, (m) => m.toUpperCase());
}
