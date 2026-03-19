import { f as fallback, h as ensure_array_like, b as attr, ad as stringify, ac as attr_style, e as escape_html, d as bind_props } from "./index2.js";
import { p as postsPerPage } from "./config.js";
function PostsList($$renderer, $$props) {
  let posts = fallback($$props["posts"], () => [], true);
  $$renderer.push(`<ul class="posts-list"><!--[-->`);
  const each_array = ensure_array_like(posts);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let post = each_array[$$index];
    $$renderer.push(`<li><article><a${attr("href", `/blog/${stringify(post.slug)}`)}><img${attr("src", post.coverImage)} alt=""${attr("width", post.coverWidth)}${attr("height", post.coverHeight)}${attr_style(`ratio: ${stringify(post.coverWidth)} / ${stringify(post.coverHeight)}`)}/> <h2>${escape_html(post.title)}</h2></a></article> <p>${escape_html(post.excerpt)}</p></li>`);
  }
  $$renderer.push(`<!--]--></ul>`);
  bind_props($$props, { posts });
}
function Pagination($$renderer, $$props) {
  let currentPage = $$props["currentPage"];
  let totalPosts = $$props["totalPosts"];
  let path = fallback($$props["path"], "/blog/page");
  let pagesAvailable;
  const isCurrentPage = (page) => page == currentPage;
  pagesAvailable = Math.ceil(totalPosts / postsPerPage);
  $$renderer.push(`<!---->`);
  {
    if (pagesAvailable > 1) {
      $$renderer.push("<!--[0-->");
      $$renderer.push(`<nav aria-label="Pagination navigation" class="pagination"><ul><!--[-->`);
      const each_array = ensure_array_like(Array.from({ length: pagesAvailable }, (_, i) => i + 1));
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let page = each_array[$$index];
        $$renderer.push(`<li><a${attr("href", `${stringify(path)}/${stringify(page)}`)}${attr("aria-current", isCurrentPage(page))}><span class="sr-only">`);
        if (isCurrentPage(page)) {
          $$renderer.push("<!--[0-->");
          $$renderer.push(`Current page:`);
        } else {
          $$renderer.push("<!--[-1-->");
          $$renderer.push(`Go to page`);
        }
        $$renderer.push(`<!--]--></span> ${escape_html(page)}</a></li>`);
      }
      $$renderer.push(`<!--]--></ul></nav>`);
    } else {
      $$renderer.push("<!--[-1-->");
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!---->`);
  bind_props($$props, { currentPage, totalPosts, path });
}
export {
  PostsList as P,
  Pagination as a
};
