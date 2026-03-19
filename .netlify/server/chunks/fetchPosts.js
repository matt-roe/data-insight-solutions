import { p as postsPerPage } from "./config.js";
const fetchPosts = async ({ offset = 0, limit = postsPerPage, category = "" } = {}) => {
  const posts = await Promise.all(
    Object.entries(/* @__PURE__ */ Object.assign({ "/src/lib/posts/2023-09-30-test-1.md": () => import("./2023-09-30-test-1.js"), "/src/lib/posts/2024-ai-video-editing.md": () => import("./2024-ai-video-editing.js"), "/src/lib/posts/2024-bakery-automation.md": () => import("./2024-bakery-automation.js"), "/src/lib/posts/2024-healthyconnections.md": () => import("./2024-healthyconnections.js"), "/src/lib/posts/2024-legacy-software.md": () => import("./2024-legacy-software.js"), "/src/lib/posts/2024-shopify-customization.md": () => import("./2024-shopify-customization.js"), "/src/lib/posts/2024-voip-integration.md": () => import("./2024-voip-integration.js") })).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const slug = path.split("/").pop().slice(0, -3);
      return { ...metadata, slug };
    })
  );
  let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  console.log({ sortedPosts });
  if (category) {
    sortedPosts = sortedPosts.filter((post) => post.categories.some((item) => item.categoryName === category));
  }
  if (offset) {
    sortedPosts = sortedPosts.slice(offset);
  }
  if (limit && limit < sortedPosts.length && limit != -1) {
    sortedPosts = sortedPosts.slice(0, limit);
  }
  sortedPosts = sortedPosts.map((post) => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    coverWidth: post.coverWidth,
    coverHeight: post.coverHeight,
    date: post.date,
    categories: post.categories
  }));
  return {
    posts: sortedPosts
  };
};
export {
  fetchPosts as f
};
