import { posts } from "../../.velite";

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("pt-Br", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function sortPosts(posts: Array<posts>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}
