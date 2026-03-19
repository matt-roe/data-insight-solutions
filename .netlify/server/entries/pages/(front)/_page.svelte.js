import { a9 as head, aa as bind_props, e as escape_html } from "../../../chunks/index2.js";
import { s as siteTitle } from "../../../chunks/config.js";
import "clsx";
function Carousel($$renderer) {
  $$renderer.push(`<div class="grid grid-cols-3 mx-auto w-full carousel carousel-center gap-10 -mt-[10rem] lg:-mt-[10rem] py-10"><div class="carousel-item hover:scale-[102%] transition-all duration-300"><img class="w-48 sm:w-48 lg:w-64 xl:w-96 rounded-lg shadow-lg" src="/images/collab.png" alt="Collaboration"/></div> <div class="carousel-item hover:scale-[102%] transition-all duration-300"><img class="w-48 sm:w-48 lg:w-64 xl:w-96 rounded-lg shadow-lg" src="/images/contemplateLayers.png" alt="Design"/></div> <div class="carousel-item hover:scale-[102%] transition-all duration-300"><img class="w-48 sm:w-48 lg:w-64 xl:w-96 rounded-lg shadow-lg" src="/images/datacenter.png" alt="Data center"/></div></div>`);
}
function Hero($$renderer) {
  $$renderer.push(`<div class="hero h-[100vh] lg:h-[45rem] shadow-lg" style="background-image: url('/images/data-chaos.png');"><div class="hero-overlay bg-opacity-80"></div> <div class="hero-content text-neutral-content"><div class="z-60 drop-shadow-lg text-center"><div class="mb-5 text-8xl font-bold">Transform Data</div> <div class="mb-5 max-w-xl text-center">into actionable insights. We help businesses collect, automate, integrate, and display data to drive informed decisions and sustainable growth.</div> <div class="flex gap-4 justify-center"><a href="/about"><button class="btn btn-primary transition-color duration-300 text-lg">About Us</button></a></div></div></div></div>`);
}
function HeroCards($$renderer) {
  $$renderer.push(`<div class="hero min-h-full bg-base-200 rounded-lg"><div class="hero-content flex-col lg:flex-row xl:gap-32"><img alt="hero" src="/images/C.png" class="h-80 w-full object-cover rounded-lg shadow-lg"/> <div class="text-center max-w-lg"><h2 class="text-3xl font-bold text-white">Collect</h2> <p class="py-6 text-white">Establish reliable data sources from your business operations. From custom web forms and APIs to existing databases and communication platforms, we design collection strategies that minimize friction and maximize accuracy.</p></div></div></div> <div class="grid grid-cols-3 auto-rows-max"><div class="h-full row-span-4"><ul class="steps steps-vertical"><li class="step step-primary">Collect</li> <li class="step">Automate</li> <li class="step">Integrate</li> <li class="step">Display</li></ul></div> <ul class="list-disc my-10"><li>Websites</li> <li>PowerApps</li> <li>Fillable PDFs</li> <li>VOIP</li> <li>Zoom</li></ul> <ul class="list-disc my-10"><li>Existing Software</li> <li>Existing Databases</li> <li>Teams</li> <li>Slack</li></ul></div> <div class="hero min-h-full bg-base-200 rounded-lg"><div class="hero-content flex-col lg:flex-row-reverse xl:gap-32"><img alt="hero" src="/images/A.png" class="h-80 w-full object-cover rounded-lg shadow-lg"/> <div class="text-center max-w-lg"><h2 class="text-3xl font-bold text-white">Automate</h2> <p class="py-6 text-white">Eliminate manual processes and reduce human error through intelligent automation. We build workflows that handle data transformations, validations, and business logic so your team can focus on strategic decisions.</p></div></div></div> <div class="container mx-auto my-auto grid grid-cols-3 auto-rows-max"><ul class="list-disc my-10"><li>Low Code</li> <li>Full Code</li> <li>In-app Workflows</li> <li>Approval Flows</li></ul> <ul class="list-disc my-10"><li>Business Process</li> <li>Calculations</li> <li>Tracking</li> <li>Statistics</li></ul> <div class="h-full row-span-4"><ul class="steps steps-vertical"><li class="step">Collect</li> <li class="step step-primary">Automate</li> <li class="step">Integrate</li> <li class="step">Display</li></ul></div></div> <div class="hero min-h-full bg-base-200 rounded-lg"><div class="hero-content flex-col lg:flex-row xl:gap-32"><img alt="hero" src="/images/I.png" class="h-80 w-full object-cover rounded-lg shadow-lg"/> <div class="text-center max-w-lg"><h2 class="text-3xl font-bold text-white">Integrate</h2> <p class="py-6 text-white">Break down data silos by connecting disparate systems and sources. Our integration solutions unify information across your organization, creating a single source of truth for better visibility and smarter decision-making.</p></div></div></div> <div class="container mx-auto my-auto grid grid-cols-3 auto-rows-max"><div class="h-full row-span-4"><ul class="steps steps-vertical"><li class="step">Collect</li> <li class="step">Automate</li> <li class="step step-primary">Integrate</li> <li class="step">Display</li></ul></div> <ul class="list-disc my-10"><li>APIs</li> <li>REST</li> <li>SOAP</li> <li>SDKs</li></ul> <ul class="list-disc my-10"><li>Extraction, Load, &amp; Translation (ELT)</li> <li>Unique IDs</li> <li>Webhooks</li> <li>Polling</li></ul></div> <div class="hero min-h-full bg-base-200 rounded-lg"><div class="hero-content flex-col lg:flex-row-reverse xl:gap-32"><img alt="hero" src="/images/D.png" class="h-80 w-full object-cover rounded-lg shadow-lg"/> <div class="text-center max-w-lg"><h2 class="text-3xl font-bold text-white">Display</h2> <p class="py-6 text-white">Transform raw data into compelling visualizations that drive action. We create intuitive dashboards, reports, and interfaces tailored to your audience, ensuring insights are understood and acted upon.</p></div></div></div> <div class="container mx-auto my-auto grid grid-cols-3 auto-rows-max"><ul class="list-disc my-10"><li>Reports</li> <li>Diagrams</li> <li>Business Intelligence</li> <li>Dashboards</li></ul> <ul class="list-disc my-10"><li>Power BI</li> <li>Web</li> <li>In-app reports</li> <li>Projections</li></ul> <div class="h-full row-span-4"><ul class="steps steps-vertical"><li class="step">Collect</li> <li class="step">Automate</li> <li class="step">Integrate</li> <li class="step step-primary">Display</li></ul></div></div>`);
}
function FeaturedProject($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function _page($$renderer, $$props) {
  const data = void 0;
  head("1tbodn9", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>${escape_html(siteTitle)}</title>`);
    });
  });
  $$renderer.push(`<div><div><div>`);
  Hero($$renderer);
  $$renderer.push(`<!----></div> <div class="container mx-auto my-auto">`);
  Carousel($$renderer);
  $$renderer.push(`<!----></div></div> <div class="container mx-auto my-auto"><div class="container mx-auto my-auto">`);
  HeroCards($$renderer);
  $$renderer.push(`<!----></div></div> <div class="container mx-auto my-auto">`);
  FeaturedProject($$renderer);
  $$renderer.push(`<!----></div> <div class="container mx-auto my-auto mt-12"><section class="cta-section py-12 md:py-16 px-4 svelte-1tbodn9"><h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Ready to Transform Your Data?</h2> <p class="text-lg text-center max-w-2xl mx-auto mb-8">See how we've helped businesses across industries solve complex data challenges. Let's explore what's possible for your organization.</p> <div class="flex justify-center gap-4 flex-wrap"><a href="/blog" class="btn btn-primary btn-lg">View All Project Examples</a> <a href="/contact" class="btn btn-outline btn-lg">Get Started</a></div></section></div></div>`);
  bind_props($$props, { data });
}
export {
  _page as default
};
