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
		client: {start:"_app/immutable/entry/start.D-lHbYpS.js",app:"_app/immutable/entry/app.CioWn1YW.js",imports:["_app/immutable/entry/start.D-lHbYpS.js","_app/immutable/chunks/_-9cAJ8w.js","_app/immutable/chunks/Cqsqj2da.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Btqr1v7E.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/BIJMtWSO.js","_app/immutable/entry/app.CioWn1YW.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/Cqsqj2da.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/D_iqrDA_.js","_app/immutable/chunks/DdZzsM25.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BIJMtWSO.js","_app/immutable/chunks/D_XZoSU-.js","_app/immutable/chunks/Cb2EFZr4.js","_app/immutable/chunks/CDvvz4IT.js","_app/immutable/chunks/BjvYje4g.js","_app/immutable/chunks/CvTF9ro2.js","_app/immutable/chunks/Btqr1v7E.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/admin","/api/posts.json","/api/posts/count","/api/rss.xml","/blog","/blog/__data.json","/blog/category","/blog/category/__data.json","/blog/page","/blog/page/__data.json","/contact","/services","/success","/blog/2024-ocr-mistral","/blog/2024-busybee-bakery","/blog/2024-ai-video-editing","/blog/2024-legacy-software","/blog/2024-voip-integration","/blog/2024-shopify-customization","/blog/2024-healthyconnections","/blog/2024-bakery-automation","/blog/2023-09-30-test-1","/blog/category/Technology","/blog/category/Technology/__data.json","/blog/category/AI","/blog/category/AI/__data.json","/blog/category/Automation","/blog/category/Automation/__data.json","/blog/category/Case Study","/blog/category/Case Study/__data.json","/blog/category/Startup","/blog/category/Startup/__data.json","/blog/category/Innovation","/blog/category/Innovation/__data.json","/blog/category/Integration","/blog/category/Integration/__data.json","/blog/category/E-Commerce","/blog/category/E-Commerce/__data.json","/blog/category/Web Development","/blog/category/Web Development/__data.json","/blog/category/Consulting","/blog/category/Consulting/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
