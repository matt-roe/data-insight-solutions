import { p as postsPerPage } from "../../../../../../chunks/config.js";
import { f as fetchPosts } from "../../../../../../chunks/fetchPosts.js";
import { redirect } from "@sveltejs/kit";
const load = async ({ url, params, fetch }) => {
  const page = parseInt(params.page) || 1;
  if (page <= 1) {
    throw redirect(301, "/blog");
  }
  let offset = page * postsPerPage - postsPerPage;
  const totalPostsRes = await fetch(`${url.origin}/api/posts/count`);
  const total = await totalPostsRes.json();
  const { posts } = await fetchPosts({ offset });
  return {
    posts,
    page,
    totalPosts: total
  };
};
export {
  load
};
