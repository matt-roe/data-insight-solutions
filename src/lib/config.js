/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = 'Data Insight Solutions'
export const siteDescription = 'Built with the SvelteKit Static Blog Starter & Sveltia'
export const siteURL = 'data-insight-solutions.com'
export const siteLink = 'https://data-insight-solutions.com/'
export const siteAuthor = '- Data Insight Solutions LLC'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Home',
		route: '/'
	}, {
		title: 'Services',
		route: '/services'
	}, {
		title: 'Blog',
		route: '/blog'
	}, {
		title: 'About',
		route: '/about'
	}, {
		title: 'Contact',
		route: '/contact'
	},
]
