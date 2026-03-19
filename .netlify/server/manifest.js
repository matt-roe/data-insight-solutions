export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["config.yml","favicon.png","images/A.png","images/C.png","images/D.png","images/I.png","images/Untitled design (10).png","images/Untitled design (11).png","images/Untitled design (12).png","images/Untitled design (13).png","images/Untitled design (15).png","images/Untitled design (16).png","images/Untitled design (17).png","images/Untitled design (18).png","images/Untitled design (20).png","images/Untitled design (21).png","images/Untitled design (22).png","images/Untitled design (24).png","images/Untitled design (25).png","images/Untitled design (27).png","images/Untitled design (4).png","images/Untitled design (5).png","images/Untitled design (7).png","images/Untitled design (8).png","images/Untitled design (9).png","images/collab.png","images/contemplateLayers.png","images/data-chaos.png","images/datacenter.png","images/headshot.jpg","images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg","images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg","images/linus-nylund-Q5QspluNZmM-unsplash.jpg","images/spreadsheet-1068.jpg","images/spreadsheet.png","link.svg"]),
	mimeTypes: {".yml":"text/yaml",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CAoNF_lo.js",app:"_app/immutable/entry/app.DKgu53gB.js",imports:["_app/immutable/entry/start.CAoNF_lo.js","_app/immutable/chunks/COlJzctJ.js","_app/immutable/chunks/CkOQWaMm.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/hj4ma2IL.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/DPmNIuEV.js","_app/immutable/entry/app.DKgu53gB.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/CkOQWaMm.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/SU9GnJbO.js","_app/immutable/chunks/c8uTe1KE.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DPmNIuEV.js","_app/immutable/chunks/CSqlbcmH.js","_app/immutable/chunks/DWnoBQIu.js","_app/immutable/chunks/BYSsNQII.js","_app/immutable/chunks/BWX8WBqw.js","_app/immutable/chunks/0g7q4S4F.js","_app/immutable/chunks/hj4ma2IL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/admin","/api/posts.json","/api/posts/count","/api/rss.xml","/blog","/blog/__data.json","/blog/category","/blog/category/__data.json","/blog/page","/blog/page/__data.json","/contact","/services","/success","/blog/2023-09-30-test-1","/blog/category/Technology","/blog/category/Technology/__data.json","/blog/category/Consulting","/blog/category/Consulting/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
