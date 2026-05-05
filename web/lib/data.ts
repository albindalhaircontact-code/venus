import siteJson from "@/data/site.json";

export type ProductImage = { src: string; alt: string; thumb: string };
export type ProductCategoryRef = { id: number; name: string; slug: string };
export type Product = {
  id: number;
  name: string;
  slug: string;
  permalink?: string;
  image: string | null;
  images: ProductImage[];
  categories: ProductCategoryRef[];
  short: string;
  intro: string;
  application: string;
  resultats: string;
  ingredients: string;
  claims: string[];
  in_stock: boolean;
  rating: string;
  reviews: number;
};

export type Category = {
  id: number;
  parent: number;
  name: string;
  slug: string;
  count: number;
  description: string;
};

export type Post = {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  link?: string;
  image?: string | null;
};

const data = siteJson as unknown as {
  products: Product[];
  categories: Category[];
  posts: Post[];
};

export const products: Product[] = data.products;
export const categories: Category[] = data.categories;
export const posts: Post[] = data.posts;

export function categoryById(id: number): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function categoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function descendantCategoryIds(rootId: number): Set<number> {
  const ids = new Set<number>([rootId]);
  let added = true;
  while (added) {
    added = false;
    for (const c of categories) {
      if (ids.has(c.parent) && !ids.has(c.id)) {
        ids.add(c.id);
        added = true;
      }
    }
  }
  return ids;
}

export function productsInCategory(rootId: number): Product[] {
  const ids = descendantCategoryIds(rootId);
  return products.filter((p) => p.categories.some((c) => ids.has(c.id)));
}

export function productsByCategorySlug(slug: string): Product[] {
  const cat = categoryBySlug(slug);
  if (!cat) return [];
  return productsInCategory(cat.id);
}

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function topLevelCategories(): Category[] {
  return categories.filter((c) => c.parent === 0);
}

export function postBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
