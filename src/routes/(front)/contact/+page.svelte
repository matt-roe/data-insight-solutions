<script>
  import { Input, Select, Label, Helper, Button, Checkbox, A, Textarea} from 'flowbite-svelte';
  let selected;
  let options = [
    { value: 'lead', name: 'Leader' },
    { value: 'contributor', name: 'Contributor' }
  ];
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<h1>Contact</h1>

Here you can inquire about us, our process and services, or just say hello!

<div >
<form netlify id="contactForm" class="grid grid-flow-row gap-6" name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" netlify-honeypot="bot-field" action="https://formspree.io/f/mleyowkw">
  <Label for="name" class="mb-2 max-w-sm min-w-xs">Your Name: <Input id="name" placeholder="Name" type="text" name="name" /></Label>
  <Label for="business" class="mb-2 max-w-sm min-w-xs">Business Name: <Input id="business" placeholder="Business Name"  type="text" name="business" /></Label>
  <Label for="email" class="mb-2 max-w-sm min-w-xs">Your Email: <Input id="email" placeholder="Email" type="email" name="email" /></Label>
  <Label for="phone" class="mb-2 max-w-sm min-w-xs">Your Phone: <Input id="phone" placeholder="Phone"  type="phone" name="phone" /></Label>
  <Checkbox id="preferPhone" class="mb-2 max-w-sm min-w-xs" name="preferPhone"> I prefer phone.</Checkbox>
  <Label for="role" class="mb-2 max-w-sm min-w-xs">Your Role: <br><Select class="mt-2" items={options} bind:value={selected} /></Label>
  <Label for="message" class="mb-2 md:col-span-3">Message: <br><Textarea id="message" required placeholder="Message" name="message"></Textarea></Label>
  <Input type="hidden" name="form-name" value="contact" />
  <Button class="btn btn-secondary mx-auto" type="submit" value="Submit">Send</Button>
</form>
</div>
