import { json } from "@sveltejs/kit";
const prerender = true;
const GET = () => {
  const posts = /* @__PURE__ */ Object.assign({ "/src/lib/posts/2023-09-30-test-1.md": () => import("../../../../../chunks/2023-09-30-test-1.js") });
  return json(Object.keys(posts).length);
};
export {
  GET,
  prerender
};
