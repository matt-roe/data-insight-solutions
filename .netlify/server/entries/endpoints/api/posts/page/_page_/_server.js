import { p as postsPerPage } from "../../../../../../chunks/config.js";
import { f as fetchPosts } from "../../../../../../chunks/fetchPosts.js";
import { json } from "@sveltejs/kit";
const prerender = true;
const GET = async ({ params }) => {
  const { page } = params || 1;
  const options = {
    offset: (page - 1) * postsPerPage,
    limit: postsPerPage
  };
  const { posts } = await fetchPosts(options);
  return json(posts);
};
export {
  GET,
  prerender
};
