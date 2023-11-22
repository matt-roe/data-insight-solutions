import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ params }) => {
	const category = params.category
  const page = params.page || 1
  console.log({category})
  console.log({page})
	const options = { category, limit: -1 }
	const { posts } = await fetchPosts(options)
  console.log({posts})
	return {
		posts,
		category,
		page,
		total: posts.length
	}
}
