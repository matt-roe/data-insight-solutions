import { a9 as head, e as escape_html, ac as stringify } from "../../../../../../chunks/index2.js";
import { P as PostsList, a as Pagination } from "../../../../../../chunks/Pagination.js";
function _page($$renderer, $$props) {
  let { data } = $$props;
  const { page, posts, category, total } = data;
  head("37kxbu", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Category: ${escape_html(category)}</title>`);
    });
  });
  $$renderer.push(`<h1>Blog category: ${escape_html(category)}</h1> `);
  if (posts.length) {
    $$renderer.push("<!--[0-->");
    PostsList($$renderer, { posts });
    $$renderer.push(`<!----> `);
    Pagination($$renderer, {
      currentPage: page,
      totalPosts: total,
      path: `/blog/category/${stringify(category)}/page`
    });
    $$renderer.push(`<!---->`);
  } else {
    $$renderer.push("<!--[-1-->");
    $$renderer.push(`<p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "${escape_html(category)}".</p> <p><a href="/blog">Back to blog</a></p>`);
  }
  $$renderer.push(`<!--]-->`);
}
export {
  _page as default
};
