import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";

export function ProductCard({
  product,
  size = "md",
}: {
  product: Product;
  size?: "sm" | "md" | "lg";
}) {
  const cat = product.categories[0];
  return (
    <Link
      href={`/produit/${product.slug}`}
      className="group block"
    >
      <div
        className={`relative bg-ivory-dark/40 overflow-hidden ${
          size === "lg" ? "aspect-[4/5]" : "aspect-square"
        }`}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-contain p-6 transition-transform duration-700 ease-venus group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-navy/30 font-display text-xl">
            Vénus
          </div>
        )}
        <span className="absolute top-3 left-3 label-eyebrow !text-[10px] !text-navy/60 bg-ivory/80 backdrop-blur px-2 py-1">
          {cat?.name ?? "Vénus"}
        </span>
      </div>
      <div className="pt-4">
        <h3 className="font-display text-lg lg:text-xl text-navy leading-tight group-hover:text-terracotta transition line-clamp-2">
          {prettyName(product.name)}
        </h3>
        {product.short && (
          <p className="text-[13px] text-ink/60 mt-1 line-clamp-2 font-sans">
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
