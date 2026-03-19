import { f as ensure_array_like, a as attr, ac as stringify, ab as attr_style, e as escape_html, d as derived } from "./index2.js";
import { p as postsPerPage } from "./config.js";
function PostsList($$renderer, $$props) {
  let { posts = [] } = $$props;
  $$renderer.push(`<ul class="posts-list"><!--[-->`);
  const each_array = ensure_array_like(posts);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let post = each_array[$$index];
    $$renderer.push(`<li><article><a${attr("href", `/blog/${stringify(post.slug)}`)}><img${attr("src", post.coverImage)} alt=""${attr("width", post.coverWidth)}${attr("height", post.coverHeight)}${attr_style(`ratio: ${stringify(post.coverWidth)} / ${stringify(post.coverHeight)}`)}/> <h2>${escape_html(post.title)}</h2></a></article> <p>${escape_html(post.excerpt)}</p></li>`);
  }
  $$renderer.push(`<!--]--></ul>`);
}
function Pagination($$renderer, $$props) {
  let { currentPage, totalPosts, path = "/blog/page" } = $$props;
  let pagesAvailable = derived(() => Math.ceil(totalPosts / postsPerPage));
  const isCurrentPage = (page) => page == currentPage;
  $$renderer.push(`<!---->`);
  {
    if (pagesAvailable() > 1) {
      $$renderer.push("<!--[0-->");
      $$renderer.push(`<nav aria-label="Pagination navigation" class="pagination"><ul><!--[-->`);
      const each_array = ensure_array_like(Array.from({ length: pagesAvailable() }, (_, i) => i + 1));
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
}
export {
  PostsList as P,
  Pagination as a
};
