import { notFound } from "next/navigation";
import { posts } from "../../../../.velite"
import { MDXContent } from "@/components/mdx-content";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostFromParams(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container py-6 prose max-w-3xl mx-auto font-sans">
      <h1 className="mb-2 font-serif text-primary">{post.title.toLowerCase()}</h1>
      <MDXContent code={post.body} />
    </article>
  );
}

async function getPostFromParams(slug: string) {
  const post = posts.find((post) => post.slugAsParams === slug);
  if (!post) return null;
  return post;
}

// export async function generateStaticParams(): Promise<
//   PostPageProps["params"][]
// > {
//   return posts.map((post) => ({ slug: post.slugAsParams }));
// }
//
