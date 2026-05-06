import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, postBySlug } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = postBySlug(params.slug);
  return { title: p?.title ?? "Article" };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = postBySlug(params.slug);
  if (!post) return notFound();

  // related posts: any 3 others
  const related = posts.filter((p) => p.id !== post.id).slice(0, 3);
  // split content into paragraphs (the API returns plain text after stripping)
  const paragraphs = post.content
    .split(/\n\n+|(?<=\.) (?=[A-ZÀ-Ÿ])/g)
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <article className="pt-32 pb-32">
      <div className="container-prose max-w-4xl">
        <Link href="/journal" className="label-eyebrow hover:text-terracotta transition">
          ← Venus Mag
        </Link>
        <header className="mt-8 border-b border-ink/15 pb-10 mb-12">
          <p className="label-eyebrow mb-4">
            {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.1]">
            {post.title}
          </h1>
        </header>

        <div className="prose-venus">
          {paragraphs.slice(0, 12).map((p, i) => (
            <p key={i} className="mb-6 text-ink/80 text-lg leading-[1.8]">
              {p}
            </p>
          ))}
        </div>

        <p className="mt-12 italic font-display text-navy text-xl border-t border-ink/15 pt-10">
          — Le Laboratoire Venus
        </p>
      </div>

      {related.length > 0 && (
        <section className="mt-32 container-prose max-w-4xl">
          <h2 className="font-display text-3xl text-navy mb-10">À lire ensuite</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((r) => (
              <Link key={r.id} href={`/journal/${r.slug}`} className="group block">
                <p className="label-eyebrow mb-2">
                  {new Date(r.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                </p>
                <h3 className="font-display text-xl text-navy group-hover:text-terracotta transition leading-tight">
                  {r.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
