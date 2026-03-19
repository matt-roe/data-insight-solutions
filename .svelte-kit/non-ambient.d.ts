
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/(front)" | "/(admin)" | "/" | "/(front)/about" | "/(admin)/admin" | "/api" | "/api/posts.json" | "/api/posts" | "/api/posts/count" | "/api/posts/page" | "/api/posts/page/[page]" | "/api/rss.xml" | "/(front)/blog" | "/(front)/blog/category" | "/(front)/blog/category/page" | "/(front)/blog/category/page/[page]" | "/(front)/blog/category/[category]" | "/(front)/blog/category/[category]/page" | "/(front)/blog/category/[category]/page/[page]" | "/(front)/blog/page" | "/(front)/blog/page/[page]" | "/(front)/blog/[post]" | "/(front)/contact" | "/(front)/services" | "/(front)/success";
		RouteParams(): {
			"/api/posts/page/[page]": { page: string };
			"/(front)/blog/category/page/[page]": { page: string };
			"/(front)/blog/category/[category]": { category: string };
			"/(front)/blog/category/[category]/page": { category: string };
			"/(front)/blog/category/[category]/page/[page]": { category: string; page: string };
			"/(front)/blog/page/[page]": { page: string };
			"/(front)/blog/[post]": { post: string }
		};
		LayoutParams(): {
			"/(front)": { page?: string; category?: string; post?: string };
			"/(admin)": Record<string, never>;
			"/": { page?: string; category?: string; post?: string };
			"/(front)/about": Record<string, never>;
			"/(admin)/admin": Record<string, never>;
			"/api": { page?: string };
			"/api/posts.json": Record<string, never>;
			"/api/posts": { page?: string };
			"/api/posts/count": Record<string, never>;
			"/api/posts/page": { page?: string };
			"/api/posts/page/[page]": { page: string };
			"/api/rss.xml": Record<string, never>;
			"/(front)/blog": { page?: string; category?: string; post?: string };
			"/(front)/blog/category": { page?: string; category?: string };
			"/(front)/blog/category/page": { page?: string };
			"/(front)/blog/category/page/[page]": { page: string };
			"/(front)/blog/category/[category]": { category: string; page?: string };
			"/(front)/blog/category/[category]/page": { category: string; page?: string };
			"/(front)/blog/category/[category]/page/[page]": { category: string; page: string };
			"/(front)/blog/page": { page?: string };
			"/(front)/blog/page/[page]": { page: string };
			"/(front)/blog/[post]": { post: string };
			"/(front)/contact": Record<string, never>;
			"/(front)/services": Record<string, never>;
			"/(front)/success": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/admin" | "/api/posts.json" | "/api/posts/count" | `/api/posts/page/${string}` & {} | "/api/rss.xml" | "/blog" | "/blog/category" | `/blog/category/page/${string}` & {} | `/blog/category/${string}` & {} | `/blog/category/${string}/page` & {} | `/blog/category/${string}/page/${string}` & {} | "/blog/page" | `/blog/page/${string}` & {} | `/blog/${string}` & {} | "/contact" | "/services" | "/success";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/config.yml" | "/favicon.png" | "/images/A.png" | "/images/C.png" | "/images/D.png" | "/images/I.png" | "/images/Untitled design (10).png" | "/images/Untitled design (11).png" | "/images/Untitled design (12).png" | "/images/Untitled design (13).png" | "/images/Untitled design (15).png" | "/images/Untitled design (16).png" | "/images/Untitled design (17).png" | "/images/Untitled design (18).png" | "/images/Untitled design (20).png" | "/images/Untitled design (21).png" | "/images/Untitled design (22).png" | "/images/Untitled design (24).png" | "/images/Untitled design (25).png" | "/images/Untitled design (27).png" | "/images/Untitled design (4).png" | "/images/Untitled design (5).png" | "/images/Untitled design (7).png" | "/images/Untitled design (8).png" | "/images/Untitled design (9).png" | "/images/blog-posts/2023-09-30-test-1.jpg" | "/images/blog-posts/2024-ai-video-editing.jpg" | "/images/blog-posts/2024-bakery-automation.jpg" | "/images/blog-posts/2024-busybee-bakery.jpg" | "/images/blog-posts/2024-healthyconnections.jpg" | "/images/blog-posts/2024-legacy-software.jpg" | "/images/blog-posts/2024-ocr-mistral.jpg" | "/images/blog-posts/2024-shopify-customization.jpg" | "/images/blog-posts/2024-voip-integration.jpg" | "/images/collab.png" | "/images/contemplateLayers.png" | "/images/data-chaos.png" | "/images/datacenter.png" | "/images/headshot.jpg" | "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg" | "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg" | "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg" | "/images/spreadsheet-1068.jpg" | "/images/spreadsheet.png" | "/link.svg" | string & {};
	}
}