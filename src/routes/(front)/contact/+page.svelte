<script>
	import Callout from '$lib/components/Callout.svelte'
</script>


<svelte:head>
	<title>Contact</title>
</svelte:head>


<h1>Contact</h1>

Here you can inquire about us, our process and services, or just say hello!

<Callout>We can share our phone number after we know we are speaking to a human, sorry for the inconvenience!</Callout>

<form class="form-control container mx-auto w-4/5" on:submit|preventDefault name="contact" method="POST" netlify>
    <label>Your Name: <input placeholder="Name" class="input max-w-sm text-white" type="text" name="name" /></label>
    <br>
    <label>Business Name: <input placeholder="Business Name" class="input max-w-sm text-white" type="text" name="business" /></label>
    <br>
    <label>Your Email: <input placeholder="Email" class="input max-w-sm text-white" type="email" name="email" /></label>
    <br>
    <label>Your Phone: <input placeholder="Phone" class="input max-w-sm text-white" type="phone" name="phone" /></label>
    <br>
    <label>Your Role: <br><select class="select w-full text-white w-fit" name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Individual Contributor</option>
    </select></label>

    <label class="cursor-pointer label w-fit">
      <input type="checkbox" checked="checked" class="checkbox checkbox-secondary" />
      <span class="label-text mx-5">I would rather speak on the phone next time.</span>
    </label>

    <label>Message: <br><textarea class="textarea textarea-bordered text-white w-full" placeholder="Message" name="message"></textarea></label>

    <button class="btn btn-secondary" type="submit">Send</button>

</form>
