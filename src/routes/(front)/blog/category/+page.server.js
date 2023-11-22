export const load = async ({ url, fetch }) => {
	const res = await fetch(`${url.origin}/api/posts.json`)
	let posts = await res.json()

	let uniqueCategories = {}

	posts.forEach(post => {
    console.log({post})
		post.categories.forEach(category => {
      console.log({category})
			if (uniqueCategories.hasOwnProperty(category.categoryName)) {
				uniqueCategories[category.categoryName].count += 1
			} else {
				uniqueCategories[category.categoryName] = {
					title: category.categoryName,
					count: 1
				}
			}
		})
	})

	const sortedUniqueCategories =
		Object.values(uniqueCategories)
			.sort((a, b) => a.title > b.title)

	return {
		uniqueCategories: sortedUniqueCategories
	}
}
