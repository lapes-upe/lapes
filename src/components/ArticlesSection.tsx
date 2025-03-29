import Link from "next/link";
import { posts } from "../../.velite";
import { sortPosts } from "@/lib/utils";

function getLatestArticles() {
  const latestArticles = sortPosts(posts).slice(0, 3);
  return latestArticles;
}

export const ArticlesSection = () => {
  const latestArticles = getLatestArticles();
  return (
    <div className="flex flex-col">
      <h1 className="font-serif text-4xl text-primary font-normal">Articles</h1>
      <div className="flex flex-col gap-1 p-4 font-mono justify-center">
        {latestArticles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slugAsParams}`}>
            <div className="flex gap-2">
              <h3 className="flex-1">{article.title}</h3>
              <span>{new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-lg font-light content-center text-center">
        <Link href="/articles" className="relative group">
          see more
          <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:bg-amber-400`} />
        </Link>
      </div>
    </div>
  );
};
