import { a9 as head, aa as bind_props, a as attr } from "../../../../chunks/index2.js";
import { P as PostsList, a as Pagination } from "../../../../chunks/Pagination.js";
import { a as siteDescription } from "../../../../chunks/config.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    head("5lstpo", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Blog</title>`);
      });
      $$renderer3.push(`<meta data-key="description" name="description"${attr("content", siteDescription)}/>`);
    });
    $$renderer2.push(`<h1>Blog</h1> `);
    PostsList($$renderer2, { posts: data.posts });
    $$renderer2.push(`<!----> `);
    Pagination($$renderer2, { currentPage: 1, totalPosts: data.total });
    $$renderer2.push(`<!---->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
