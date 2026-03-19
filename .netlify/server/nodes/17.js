import * as server from '../entries/pages/(front)/contact/_page.server.js';

export const index = 17;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(front)/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(front)/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/17.BPRpMUQZ.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DkR5_KNz.js","_app/immutable/chunks/D-85raQO.js","_app/immutable/chunks/52vx-AyL.js"];
export const stylesheets = [];
export const fonts = [];
