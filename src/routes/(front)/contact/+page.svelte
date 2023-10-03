<script>
	import Callout from '$lib/components/Callout.svelte'

  export const prerender = true
</script>


<svelte:head>
	<title>Contact</title>
</svelte:head>


<h1>Contact</h1>

Here you can inquire about us, our process and services, or just say hello!

<Callout>We can share our phone number after we know we are speaking to a human, sorry for the inconvenience!</Callout>
<div class="container mx-auto w-4/5">
<form class="form-control" netlify name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" netlify-honeypot="bot-field">

    <div class="grid grid-cols-2">
      <label>Your Name: <input id="name" placeholder="Name" class="input max-w-sm text-white" type="text" name="name" /></label>

      <label>Business Name: <input id="business" placeholder="Business Name" class="input max-w-sm text-white" type="text" name="business" /></label>

    <label>Your Email: <input id="email" placeholder="Email" class="input max-w-sm text-white" type="email" name="email" /></label>

    <label>Your Phone: <input id="phone" placeholder="Phone" class="input max-w-sm text-white" type="phone" name="phone" /></label>
    <br>
    <label class="cursor-pointer label w-fit">
      <input id="preferPhone" type="checkbox" checked="checked" class="checkbox checkbox-secondary" />
      <span class="label-text mx-5">I would rather speak on the phone next time.</span>
    </label>

  </div>

    <label>Your Role: <br><select id="role" class="select w-full text-white w-fit" name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Individual Contributor</option>
    </select></label>
    <br>

    <label>Message: <br><textarea id="message" required class="textarea textarea-bordered text-white w-full" placeholder="Message" name="message"></textarea></label>
    <br>
    <input type="hidden" name="form-name" value="netlify-form-example" />
    <button class="btn btn-secondary mx-auto" type="submit" value="Submit">Send</button>
</form>
</div>
