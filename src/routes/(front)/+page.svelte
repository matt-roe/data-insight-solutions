<script>
	import { siteTitle } from '$lib/config';

	import Carousel from '$lib/components/Carousel.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HeroCards from '$lib/components/HeroCards.svelte';

	export const data = undefined;
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<div>
	<div class="">
		<div class="">
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
</div>
