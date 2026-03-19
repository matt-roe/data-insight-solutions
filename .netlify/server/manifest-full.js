export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["config.yml","favicon.png","images/A.png","images/C.png","images/D.png","images/I.png","images/Untitled design (10).png","images/Untitled design (11).png","images/Untitled design (12).png","images/Untitled design (13).png","images/Untitled design (15).png","images/Untitled design (16).png","images/Untitled design (17).png","images/Untitled design (18).png","images/Untitled design (20).png","images/Untitled design (21).png","images/Untitled design (22).png","images/Untitled design (24).png","images/Untitled design (25).png","images/Untitled design (27).png","images/Untitled design (4).png","images/Untitled design (5).png","images/Untitled design (7).png","images/Untitled design (8).png","images/Untitled design (9).png","images/blog-posts/2023-09-30-test-1.jpg","images/blog-posts/2024-ai-video-editing.jpg","images/blog-posts/2024-bakery-automation.jpg","images/blog-posts/2024-busybee-bakery.jpg","images/blog-posts/2024-healthyconnections.jpg","images/blog-posts/2024-legacy-software.jpg","images/blog-posts/2024-ocr-mistral.jpg","images/blog-posts/2024-shopify-customization.jpg","images/blog-posts/2024-voip-integration.jpg","images/collab.png","images/contemplateLayers.png","images/data-chaos.png","images/datacenter.png","images/headshot.jpg","images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg","images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg","images/linus-nylund-Q5QspluNZmM-unsplash.jpg","images/spreadsheet-1068.jpg","images/spreadsheet.png","link.svg"]),
	mimeTypes: {".yml":"text/yaml",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BZ3VMkif.js",app:"_app/immutable/entry/app.DbLClOe_.js",imports:["_app/immutable/entry/start.BZ3VMkif.js","_app/immutable/chunks/C6UEVa6l.js","_app/immutable/chunks/Cqsqj2da.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Btqr1v7E.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/BIJMtWSO.js","_app/immutable/entry/app.DbLClOe_.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/Cqsqj2da.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/D_iqrDA_.js","_app/immutable/chunks/DdZzsM25.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BIJMtWSO.js","_app/immutable/chunks/D_XZoSU-.js","_app/immutable/chunks/Cb2EFZr4.js","_app/immutable/chunks/CDvvz4IT.js","_app/immutable/chunks/BjvYje4g.js","_app/immutable/chunks/CvTF9ro2.js","_app/immutable/chunks/Btqr1v7E.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/(front)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(front)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(admin)/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/api/posts.json",
				pattern: /^\/api\/posts\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts.json/_server.js'))
			},
			{
				id: "/api/posts/count",
				pattern: /^\/api\/posts\/count\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/count/_server.js'))
			},
			{
				id: "/api/posts/page/[page]",
				pattern: /^\/api\/posts\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/page/_page_/_server.js'))
			},
			{
				id: "/api/rss.xml",
				pattern: /^\/api\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/rss.xml/_server.js'))
			},
			{
				id: "/(front)/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(front)/blog/category",
				pattern: /^\/blog\/category\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(front)/blog/category/page/[page]",
				pattern: /^\/blog\/category\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(front)/blog/category/[category]",
				pattern: /^\/blog\/category\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(front)/blog/category/[category]/page",
				pattern: /^\/blog\/category\/([^/]+?)\/page\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(front)/blog/category/[category]/page/[page]",
				pattern: /^\/blog\/category\/([^/]+?)\/page\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(front)/blog/page",
				pattern: /^\/blog\/page\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(front)/blog/page/[page]",
				pattern: /^\/blog\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(front)/blog/[post]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"post","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(front)/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(front)/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(front)/success",
				pattern: /^\/success\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 19 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
