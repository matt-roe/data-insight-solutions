<script>
	import { onMount } from 'svelte';

	let featuredPost = null;

	onMount(async () => {
		try {
			const response = await fetch('/api/posts.json');
			const posts = await response.json();
			// Find the featured post (BusyBeeBakery is most recent with featured: true)
			featuredPost = posts.find(post => post.featured === true) || posts[0];
		} catch (error) {
			console.error('Error loading featured post:', error);
		}
	});
</script>

{#if featuredPost}
	<section class="featured-project py-12 md:py-16">
		<div class="container mx-auto px-4 max-w-4xl">
			<div class="featured-badge mb-4">
				<span class="text-sm font-bold text-accent uppercase tracking-wider">Featured Project Example</span>
			</div>

			<h2 class="text-4xl md:text-5xl font-bold mb-4">{featuredPost.title}</h2>

			<p class="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
				{featuredPost.excerpt}
			</p>

			<div class="flex flex-wrap gap-3 mb-8">
				{#each featuredPost.categories as category}
					<span class="badge badge-lg badge-outline">{category.categoryName}</span>
				{/each}
			</div>

			<a 
				href="/blog/{featuredPost.slug}" 
				class="btn btn-lg btn-primary"
			>
				Read Full Project Example →
			</a>

			<div class="mt-8 p-6 bg-base-200 rounded-lg">
				<p class="text-sm text-gray-600 mb-2">
					<span class="font-semibold">Published:</span> {new Date(featuredPost.date).toLocaleDateString('en-US', { 
						year: 'numeric', 
						month: 'long', 
						day: 'numeric' 
					})}
				</p>
				<p class="text-sm text-slate">
					<span class="font-semibold">Categories:</span> {featuredPost.categories.map(c => c.categoryName).join(', ')}
				</p>
			</div>
		</div>
	</section>
{/if}

<style>
	.featured-project {
		background: linear-gradient(135deg, rgba(94, 255, 242, 0.05) 0%, rgba(94, 255, 242, 0.02) 100%);
		border-top: 2px solid var(--accent);
		border-bottom: 2px solid var(--accent);
		margin: 3rem 0;
	}

	.featured-badge {
		display: inline-block;
		padding: 0.5rem 1rem;
		background: var(--lighterAccent);
		color: var(--darker);
		border-radius: 0.25rem;
		font-weight: 600;
	}

	:global(.featured-project h2) {
		margin-top: 0;
		color: var(--darker);
		line-height: 1.2;
	}

	:global(.featured-project .badge) {
		background: var(--lightAccent);
		color: var(--slate);
		border-color: var(--accent);
		border-width: 1px;
		font-weight: 600;
		padding: 0.5rem 1rem;
		font-size: 0.85rem;
	}

	:global(.featured-project .btn) {
		font-weight: 600;
		padding: 1rem 2rem;
		font-size: 1.1rem;
	}

	@media (max-width: 768px) {
		.featured-project {
			margin: 2rem 0;
			padding: 1.5rem 0;
		}

		:global(.featured-project h2) {
			font-size: 2rem;
		}
	}
</style>
