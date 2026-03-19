import { ab as head, e as escape_html, d as bind_props, b as attr, ad as stringify } from "../../../../../../../../chunks/index2.js";
import { a as Pagination, P as PostsList } from "../../../../../../../../chunks/Pagination.js";
import { a as siteDescription, p as postsPerPage } from "../../../../../../../../chunks/config.js";
function _page($$renderer, $$props) {
  let lowerBound, upperBound;
  let data = $$props["data"];
  const { page, category, totalPosts, posts } = data;
  lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
  upperBound = Math.min(page * postsPerPage, totalPosts);
  head("u4hkdc", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Blog category ${escape_html(category)} - page ${escape_html(page)}</title>`);
    });
    $$renderer2.push(`<meta data-key="description"${attr("name", siteDescription)}/>`);
  });
  if (posts && posts.length) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<h1>Category: ${escape_html(category)} <br/> <small>Posts ${escape_html(lowerBound)}–${escape_html(upperBound)} of ${escape_html(totalPosts)}</small></h1> `);
    Pagination($$renderer, {
      currentPage: page,
      totalPosts,
      path: `/blog/category/${stringify(category)}/page`
    });
    $$renderer.push(`<!----> `);
    PostsList($$renderer, { posts });
    $$renderer.push(`<!----> `);
    Pagination($$renderer, {
      currentPage: page,
      totalPosts,
      path: `/blog/category/${stringify(category)}/page`
    });
    $$renderer.push(`<!---->`);
  } else {
    $$renderer.push("<!--[-1-->");
    $$renderer.push(`<h1>Oops!</h1> <p>Sorry, no posts to show here.</p> <a href="/blog">Back to blog</a>`);
  }
  $$renderer.push(`<!--]-->`);
  bind_props($$props, { data });
}
export {
  _page as default
};
