import { a9 as head } from "../../../../chunks/index2.js";
function _page($$renderer) {
  head("1mofc72", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Contact</title>`);
    });
  });
  $$renderer.push(`<h1>Get In Touch</h1> <p class="mb-6">Have a question about your data challenges? Want to explore how we can help? We'd love to hear from you. Fill out the form below and we'll get back to you within one business day.</p> <div><form netlify="" id="contactForm" class="grid grid-flow-row gap-6" name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" netlify-honeypot="bot-field" action="https://formspree.io/f/mvojdjre"><label for="name" class="mb-2 max-w-sm min-w-xs">Your Name: <input id="name" placeholder="Name" type="text" name="name" class="text-white"/></label> <label for="business" class="mb-2 max-w-sm min-w-xs">Business Name: <input id="business" placeholder="Business Name" class="text-white" type="text" name="business"/></label> <label for="email" class="mb-2 max-w-sm min-w-xs">Your Email: <input id="email" placeholder="Email" type="email" name="email" class="text-white"/></label> <label for="phone" class="mb-2 max-w-sm min-w-xs">Your Phone: <input id="phone" placeholder="Phone" type="phone" name="phone" class="text-white"/></label> <label for="message_body" class="mb-2 max-w-sm min-w-xs"><span>Your Message:</span></label> <textarea id="message_body" name="message_body" class="textarea textarea-bordered h-24 text-white" type="text" placeholder="Message"></textarea> <input type="hidden" name="form-name" value="contact"/> <button class="btn btn-secondary mx-auto" type="submit" value="Submit">Send</button></form></div>`);
}
export {
  _page as default
};
