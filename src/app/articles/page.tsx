"use client";

import { texts } from "@/resources/texts";
import { posts } from "../../../.velite";
import { sortPosts } from "@/lib/utils";
import Link from "next/link";
import { CustomButton } from "@/components/button";
import { useState } from "react";

function getArticleTags(): string[] {
  const tags = new Set<string>();
  sortPosts(posts).forEach((post) => {
    if (post.published !== false) {
      post.tags?.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags);
}

function getArticlesYear(): number[] {
  const years = new Set<number>();
  sortPosts(posts).forEach((post) => {
    if (post.published !== false) {
      years.add(new Date(post.date).getFullYear());
    }
  });
  return Array.from(years);
}

export default function Articles() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const dates = getArticlesYear()
  const topics = getArticleTags()
  return (
    <div className="flex flex-col gap-12 mt-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-serif text-[48px] text-primary font-normal">{texts.pages.articles.en.title}</h1>
        <p className="text-justify">{texts.pages.articles.en.description}</p>
      </div>
      <div className="font-sans text-xl">
        <h1>{texts.pages.articles.en.topics}</h1>
        <div className="flex gap-2 text-[16px]">
          {topics.map((topic) => (
            <CustomButton
              key={topic}
              className="text-[14px] cursor-pointer"
              isSelected={selectedTag === topic}
              onClick={() => setSelectedTag(selectedTag === topic ? null : topic)}
            >
              {topic}
            </CustomButton>
          ))}
        </div>
      </div>

      {dates.map((date) => {
        const postsForYear = posts.filter(
          (post) =>
            new Date(post.date).getFullYear() === date &&
            (!selectedTag || post.tags?.includes(selectedTag))
        );

        if (postsForYear.length === 0) return null;

        return (
          <div key={date}>
            <h2 className="text-4xl font-light text-primary font-serif">{date}</h2>
            <ul className="font-mono font-light">
              {postsForYear.map((post) => (
                <li key={post.slug}>
                  <Link href={`/articles/${post.slugAsParams}`} className="flex ">
                    <h1 className="flex-1">{post.title}</h1>
                    <span className="justify-end">{post.author}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}


    </div>
  );
}
