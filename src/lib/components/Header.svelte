<script>
	import MainNav from './MainNav.svelte'
	import HamburgerMenuButton from './HamburgerMenuButton.svelte'
	import { siteTitle } from '$lib/config'
	import lottie from 'lottie-web'
	import animationData from '$lib/assets/animations/bars.json'

	const focusMain = (e) => {
		e.preventDefault()
		const main = document.querySelector('main')
		main?.focus()
	}

	let animationContainer = $state(null)

	$effect.pre(() => {
		if (animationContainer) {
			lottie.loadAnimation({
				container: animationContainer,
				animationData: animationData
			})
		}
	})
</script>

<header>
	<a onclick={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>

	<a href="/" class="site-title">
		{siteTitle}
	</a>
  <div class="w-20" bind:this={animationContainer}></div>
	<HamburgerMenuButton />
	<MainNav />


</header>
