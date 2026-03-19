import * as server from '../entries/pages/(front)/blog/page/_page.server.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(front)/blog/page/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(front)/blog/page/+page.server.js";
export const imports = ["_app/immutable/nodes/15.CWG1ehzT.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js"];
export const stylesheets = [];
export const fonts = [];
