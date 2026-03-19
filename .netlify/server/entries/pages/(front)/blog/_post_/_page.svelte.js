import { a9 as head, e as escape_html, a as attr, ab as attr_style, f as ensure_array_like, ac as stringify, aa as bind_props } from "../../../../../chunks/index2.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const {
      title,
      excerpt,
      date,
      updated,
      coverImage,
      coverWidth,
      coverHeight,
      categories
    } = data.meta;
    const { PostContent } = data;
    head("1hj0khh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(title)}</title>`);
      });
      $$renderer3.push(`<meta data-key="description" name="description"${attr("content", excerpt)}/> <meta property="og:type" content="article"/> <meta property="og:title"${attr("content", title)}/> <meta name="twitter:title"${attr("content", title)}/> <meta property="og:description"${attr("content", excerpt)}/> <meta name="twitter:description"${attr("content", excerpt)}/> <meta property="og:image:width"${attr("content", coverWidth)}/> <meta property="og:image:height"${attr("content", coverHeight)}/>`);
    });
    $$renderer2.push(`<article class="post"><h1>${escape_html(title)}</h1> <div class="meta"><b>Published:</b> ${escape_html(date)} <br/> <b>Updated:</b> ${escape_html(updated)}</div> <img class="cover-image"${attr("src", coverImage)} alt=""${attr_style(`aspect-ratio: ${stringify(coverWidth)} / ${stringify(coverHeight)};`)}${attr("width", coverWidth)}${attr("height", coverHeight)}/> `);
    if (PostContent) {
      $$renderer2.push("<!--[-->");
      PostContent($$renderer2, {});
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
    $$renderer2.push(` `);
    if (categories) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<aside class="post-footer"><h2>Posted in:</h2> <ul><!--[-->`);
      const each_array = ensure_array_like(categories);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let category = each_array[$$index];
        $$renderer2.push(`<li><a${attr("href", `/blog/category/${stringify(category.categoryName)}/`)}>${escape_html(category.categoryName)}</a></li>`);
      }
      $$renderer2.push(`<!--]--></ul></aside>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></article>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
