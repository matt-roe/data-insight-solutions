<script>
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

<div>
	<form
		netlify
		id="contactForm"
		class="grid grid-flow-row gap-6"
		name="contact"
		method="POST"
		data-netlify="true"
		data-netlify-recaptcha="true"
		netlify-honeypot="bot-field"
		action="https://formspree.io/f/mvojdjre"
	>
		<label for="name" class="mb-2 max-w-sm min-w-xs"
			>Your Name: <input id="name" placeholder="Name" type="text" name="name" /></label
		>
		<label for="business" class="mb-2 max-w-sm min-w-xs"
			>Business Name: <input
				id="business"
				placeholder="Business Name"
				type="text"
				name="business"
			/></label
		>
		<label for="email" class="mb-2 max-w-sm min-w-xs"
			>Your Email: <input id="email" placeholder="Email" type="email" name="email" /></label
		>
		<label for="phone" class="mb-2 max-w-sm min-w-xs"
			>Your Phone: <input id="phone" placeholder="Phone" type="phone" name="phone" /></label
		>
		<checkbox id="preferPhone" class="mb-2 max-w-sm min-w-xs" name="preferPhone">
			I prefer phone.</checkbox
		>

    <select class="select select-bordered text-white w-full mb-2 max-w-sm min-w-xs" items={options} bind:value={selected}>
      <option disabled selected>Your role:</option>
      {#each options as option}
          <option>{option.name}</option>
      {/each}
    </select>

		<label for="message" class="label">
      <span class="label-text">Your Message</span>
    </label>
    <textarea id="message" class="textarea textarea-bordered h-24 text-white" placeholder="Message"></textarea>

		<input type="hidden" name="form-name" value="contact" />
		<button class="btn btn-secondary mx-auto" type="submit" value="Submit">Send</button>
	</form>
</div>
