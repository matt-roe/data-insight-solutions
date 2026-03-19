import { p as postsPerPage } from "../../../../chunks/config.js";
import { f as fetchPosts } from "../../../../chunks/fetchPosts.js";
import { json } from "@sveltejs/kit";
const prerender = true;
const GET = async () => {
  const options = {
    limit: postsPerPage
  };
  const { posts } = await fetchPosts(options);
  return json(posts);
};
export {
  GET,
  prerender
};
