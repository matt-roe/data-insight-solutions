import { error } from "@sveltejs/kit";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const load = async ({ params }) => {
  console.log(params);
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../lib/posts/2023-09-30-test-1.md": () => import("../../../../../chunks/2023-09-30-test-1.js") }), `../../../../lib/posts/${params.post}.md`, 7);
    return {
      PostContent: post.default,
      meta: { ...post.metadata, slug: params.post }
    };
  } catch (err) {
    throw error(404, err);
  }
};
export {
  load
};
