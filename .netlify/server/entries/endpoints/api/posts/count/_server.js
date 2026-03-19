import { json } from "@sveltejs/kit";
const prerender = true;
const GET = () => {
  const posts = /* @__PURE__ */ Object.assign({ "/src/lib/posts/2023-09-30-test-1.md": () => import("../../../../../chunks/2023-09-30-test-1.js"), "/src/lib/posts/2024-ai-video-editing.md": () => import("../../../../../chunks/2024-ai-video-editing.js"), "/src/lib/posts/2024-bakery-automation.md": () => import("../../../../../chunks/2024-bakery-automation.js"), "/src/lib/posts/2024-healthyconnections.md": () => import("../../../../../chunks/2024-healthyconnections.js"), "/src/lib/posts/2024-legacy-software.md": () => import("../../../../../chunks/2024-legacy-software.js"), "/src/lib/posts/2024-shopify-customization.md": () => import("../../../../../chunks/2024-shopify-customization.js"), "/src/lib/posts/2024-voip-integration.md": () => import("../../../../../chunks/2024-voip-integration.js") });
  return json(Object.keys(posts).length);
};
export {
  GET,
  prerender
};
