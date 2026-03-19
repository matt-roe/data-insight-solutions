<script>
	import { currentPage, isMenuOpen } from '$lib/assets/js/store'

	let { href } = $props()

	let isCurrentPage = $derived($currentPage.startsWith(href))

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
			isMenuOpen.set(false)
		}
	}
</script>

<li>
	<a
		{href}
		onclick={maybeCloseMenu}
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
	>
		<slot />
	</a>
</li>