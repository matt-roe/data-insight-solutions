<script>
	import { siteTitle } from '$lib/config';

	import Carousel from '$lib/components/Carousel.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HeroCards from '$lib/components/HeroCards.svelte';
	import FeaturedProject from '$lib/components/FeaturedProject.svelte';

	export const data = undefined;
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<div>
	<div>
		<div>
			<Hero />
		</div>

		<div class="container mx-auto my-auto">
			<Carousel />
		</div>
	</div>
	
	<div class="container mx-auto my-auto">
		<div class="container mx-auto my-auto">
			<HeroCards />
		</div>
	</div>

	<div class="container mx-auto my-auto">
		<FeaturedProject />
	</div>

	<div class="container mx-auto my-auto mt-12">
		<section class="cta-section py-12 md:py-16 px-4">
			<h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Ready to Transform Your Data?</h2>
			<p class="text-lg text-center max-w-2xl mx-auto mb-8">
				See how we've helped businesses across industries solve complex data challenges. Let's explore what's possible for your organization.
			</p>
			<div class="flex justify-center gap-4 flex-wrap">
				<a href="/blog" class="btn btn-primary btn-lg">View All Project Examples</a>
				<a href="/contact" class="btn btn-outline btn-lg">Get Started</a>
			</div>
		</section>
	</div>
</div>

<style>
	.cta-section {
		background: linear-gradient(135deg, var(--lighterAccent) 0%, var(--lightAccent) 100%);
		border-radius: 8px;
		color: var(--darker);
	}

	:global(.cta-section h2) {
		color: var(--darker);
		margin-top: 0;
	}

	:global(.cta-section p) {
		color: var(--slate);
		font-size: 1.1rem;
	}
</style>
