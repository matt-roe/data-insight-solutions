import { a9 as head, f as ensure_array_like, a as attr, ac as stringify, e as escape_html, aa as bind_props } from "../../../../../chunks/index2.js";
function _page($$renderer, $$props) {
  let data = $$props["data"];
  const { uniqueCategories } = data;
  head("w0ag8f", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Blog | Categories</title>`);
    });
  });
  $$renderer.push(`<div class="compressed-content"><h1 class="h2">All blog categories</h1> <ul><!--[-->`);
  const each_array = ensure_array_like(uniqueCategories);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$renderer.push(`<li><a${attr("href", `/blog/category/${stringify(category.title)}`)}>${escape_html(category.title)}</a> (${escape_html(category.count)})</li>`);
  }
  $$renderer.push(`<!--]--></ul></div>`);
  bind_props($$props, { data });
}
export {
  _page as default
};
