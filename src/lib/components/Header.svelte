<script>
	import MainNav from './MainNav.svelte'
	import HamburgerMenuButton from './HamburgerMenuButton.svelte'
	import { siteTitle } from '$lib/config'

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}


  import lottie from 'lottie-web';
  import animationData from '$lib/assets/animations/bars.json';
  import { onMount } from 'svelte';

  let animationContainer
  onMount(()=>{
    lottie.loadAnimation({
      container: animationContainer,
      animationData: animationData
    })
  })
</script>


<header>
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>

	<a href="/" class="site-title">
		{siteTitle}
	</a>
  <div class="w-20" bind:this={animationContainer}></div>
	<HamburgerMenuButton />
	<MainNav />


</header>
