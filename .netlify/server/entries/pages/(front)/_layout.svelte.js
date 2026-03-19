import { a as attr, b as attr_class, s as slot, u as unsubscribe_stores, d as derived, c as store_get, f as ensure_array_like, e as escape_html } from "../../../chunks/index2.js";
import "clsx";
import { n as navItems, s as siteTitle, d as siteAuthor } from "../../../chunks/config.js";
import { w as writable } from "../../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
/* empty css                  */
const currentPage = writable("");
const isMenuOpen = writable(false);
function NavItem($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { href } = $$props;
    let isCurrentPage = derived(() => store_get($$store_subs ??= {}, "$currentPage", currentPage).startsWith(href));
    $$renderer2.push(`<li><a${attr("href", href)}${attr("aria-current", isCurrentPage() ? "page" : false)}${attr_class("", void 0, { "active": isCurrentPage() })}><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></a></li>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function HamburgerSVG($$renderer) {
  $$renderer.push(`<svg viewBox="0 0 128 128" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g><rect x="0" y="12.48" width="128" height="18.688"></rect></g><g><rect x="0" y="96.832" width="128" height="18.688"></rect></g><g><rect x="0" y="54.656" width="128" height="18.688"></rect></g></svg>`);
}
function XSVG($$renderer) {
  $$renderer.push(`<svg viewBox="0 0 128 128" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M64,48.496l-48.496,-48.496l-15.504,15.504l48.496,48.496l-48.496,48.496l15.504,15.504l48.496,-48.496l48.496,48.496l15.504,-15.504l-48.496,-48.496l48.496,-48.496l-15.504,-15.504l-48.496,48.496Z"></path></svg>`);
}
function HamburgerMenuButton($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { closeOnly = false } = $$props;
    $$renderer2.push(`<button${attr("aria-pressed", store_get($$store_subs ??= {}, "$isMenuOpen", isMenuOpen))} class="menu-button"${attr("tabindex", store_get($$store_subs ??= {}, "$isMenuOpen", isMenuOpen) || !closeOnly ? "0" : "-1")}><span class="sr-only">Toggle hamburger menu</span> `);
    if (closeOnly) {
      $$renderer2.push("<!--[0-->");
      XSVG($$renderer2);
    } else {
      $$renderer2.push("<!--[-1-->");
      HamburgerSVG($$renderer2);
    }
    $$renderer2.push(`<!--]--></button>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function MainNav($$renderer) {
  var $$store_subs;
  $$renderer.push(`<nav${attr_class("main-nav", void 0, {
    "open": store_get($$store_subs ??= {}, "$isMenuOpen", isMenuOpen)
  })}><ul><!--[-->`);
  const each_array = ensure_array_like(navItems);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let page = each_array[$$index];
    NavItem($$renderer, {
      href: page.route,
      children: ($$renderer2) => {
        $$renderer2.push(`<!---->${escape_html(page.title)}`);
      },
      $$slots: { default: true }
    });
  }
  $$renderer.push(`<!--]--></ul> `);
  HamburgerMenuButton($$renderer, { closeOnly: "true" });
  $$renderer.push(`<!----></nav>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<header><a class="skip-to-content-link" href="#main">Skip to main content</a> <a href="/" class="site-title">${escape_html(siteTitle)}</a> <div class="w-20"></div> `);
    HamburgerMenuButton($$renderer2, {});
    $$renderer2.push(`<!----> `);
    MainNav($$renderer2);
    $$renderer2.push(`<!----></header>`);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer>`);
    MainNav($$renderer2);
    $$renderer2.push(`<!----> <nav><ul><li><a href="/api/rss.xml" data-sveltekit-reload="">RSS</a></li> <li><a href="/">Home</a></li></ul></nav> <div><p>©${escape_html((/* @__PURE__ */ new Date()).getFullYear())} ${escape_html(siteAuthor)}</p> <div class="w-20"></div></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    $$renderer2.push(`<div${attr_class("layout", void 0, {
      "open": store_get($$store_subs ??= {}, "$isMenuOpen", isMenuOpen)
    })}>`);
    Header($$renderer2);
    $$renderer2.push(`<!----> <!---->`);
    {
      $$renderer2.push(`<main id="main" tabindex="-1"><!--[-->`);
      slot($$renderer2, $$props, "default", {});
      $$renderer2.push(`<!--]--></main>`);
    }
    $$renderer2.push(`<!----> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
