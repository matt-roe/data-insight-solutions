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

<div class="max-w-2xl">
	<h1>Let's Work Together</h1>

	<p class="text-lg">
		We help organizations transform data into competitive advantage. Whether you're exploring your first data solution or optimizing your current systems, we're here to help.
	</p>

	<p>
		Fill out the form below and tell us about your challenge. We'll review your request and follow up within one business day with next steps.
	</p>

	<section class="info-box" aria-labelledby="guidance-heading">
		<h2 id="guidance-heading">To Help Us Serve You Better</h2>
		<p>Please share the following information in your message:</p>
		<ul>
			<li>
				<strong>Your Challenge</strong>
				<br />
				<span class="help-text">What's the business problem you're trying to solve?</span>
			</li>
			<li>
				<strong>Current State</strong>
				<br />
				<span class="help-text">What systems or processes do you have today?</span>
			</li>
			<li>
				<strong>Desired Outcome</strong>
				<br />
				<span class="help-text">What would success look like for your team?</span>
			</li>
			<li>
				<strong>Timeline</strong>
				<br />
				<span class="help-text">When are you looking to get started?</span>
			</li>
		</ul>
	</section>

	<section aria-labelledby="form-heading" class="mt-12">
		<h2 id="form-heading" class="sr-only">Contact Form</h2>
		<form
			netlify
			id="contactForm"
			class="grid grid-flow-row gap-8"
			name="contact"
			method="POST"
			data-netlify="true"
			data-netlify-recaptcha="true"
			netlify-honeypot="bot-field"
		>
			<div class="form-group">
				<label for="name">Your Name <span class="required" aria-label="required">*</span></label>
				<input 
					id="name" 
					placeholder="John Smith" 
					type="text" 
					name="name" 
					class="input input-bordered w-full max-w-md text-white"
					required
					aria-required="true"
				/>
			</div>

			<div class="form-group">
				<label for="business">Company / Organization <span class="required" aria-label="required">*</span></label>
				<input
					id="business"
					placeholder="Company Name"
					type="text"
					name="business"
					class="input input-bordered w-full max-w-md text-white"
					required
					aria-required="true"
				/>
			</div>

			<div class="form-group">
				<label for="email">Email Address <span class="required" aria-label="required">*</span></label>
				<input 
					id="email" 
					placeholder="you@company.com" 
					type="email" 
					name="email" 
					class="input input-bordered w-full max-w-md text-white"
					required
					aria-required="true"
				/>
			</div>

			<div class="form-group">
				<label for="phone">Phone Number</label>
				<input 
					id="phone" 
					placeholder="(555) 123-4567" 
					type="tel" 
					name="phone" 
					class="input input-bordered w-full max-w-md text-white"
				/>
			</div>

			<div class="form-group">
				<label for="message_body">Tell Us About Your Challenge <span class="required" aria-label="required">*</span></label>
				<p class="help-text mb-3">Describe your situation, goals, and any relevant context. The more detail you provide, the better we can prepare for our conversation.</p>
				<textarea 
					id="message_body" 
					name="message_body" 
					class="textarea textarea-bordered w-full max-w-2xl text-white" 
					placeholder="Share your challenge, current tools, desired outcome, and timeline..."
					rows="7"
					required
					aria-required="true"
				></textarea>
			</div>

			<input type="hidden" name="form-name" value="contact" />
			<div class="pt-4">
				<button class="btn btn-primary btn-lg" type="submit">Send Message</button>
			</div>
		</form>
	</section>

	<section class="mt-16 pt-8 border-t border-base-300">
		<h2>What Happens Next?</h2>
		<ol class="list-decimal list-inside space-y-3">
			<li>We review your message and understand your challenge</li>
			<li>We'll reach out within 24 hours to discuss your situation</li>
			<li>If it's a good fit, we'll propose next steps and pricing</li>
		</ol>
	</section>
</div>

<style>
	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.required {
		color: var(--accent);
		font-weight: bold;
	}

	.help-text {
		display: block;
		font-size: 0.95rem;
		color: var(--dark);
		margin-top: 0.25rem;
		line-height: 1.5;
	}

	:global(.info-box) {
		background-color: var(--lighterAccent);
		color: var(--slate);
		padding: 2rem;
		border-left: 4px solid var(--accent);
		border-radius: 4px;
		margin: 2rem 0;
	}

	:global(.info-box h2) {
		margin-top: 0;
		color: var(--darker);
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	:global(.info-box ul) {
		list-style: none;
		padding: 0;
	}

	:global(.info-box li) {
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	:global(.info-box li:last-child) {
		margin-bottom: 0;
	}

	:global(.info-box strong) {
		color: var(--darker);
		font-weight: 700;
	}

	:global(.sr-only) {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
</style>
