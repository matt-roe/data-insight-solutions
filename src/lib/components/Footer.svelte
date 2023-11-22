<script>
	import MainNav from './MainNav.svelte'
	import { siteAuthor } from '$lib/config'

  import lottie from 'lottie-web';
  import animationData from '$lib/assets/animations/home.json';
  import { onMount } from 'svelte';

  let animationContainer
  onMount(()=>{
    lottie.loadAnimation({
      container: animationContainer,
      animationData: animationData
    })
  })
</script>

<footer>
	<MainNav />

	<nav>
		<ul>
			<li>
				<a href="/api/rss.xml" data-sveltekit-reload>RSS</a>
			</li>
			<li>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>

  <div>
    <p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
    <div class="w-20" bind:this={animationContainer}></div>
  </div>

</footer>
