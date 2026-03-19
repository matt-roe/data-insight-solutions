import * as server from '../entries/pages/(front)/blog/category/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(front)/blog/category/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(front)/blog/category/+page.server.js";
export const imports = ["_app/immutable/nodes/10.DC56GJYQ.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CkOQWaMm.js","_app/immutable/chunks/SU9GnJbO.js","_app/immutable/chunks/c8uTe1KE.js","_app/immutable/chunks/C0uIQNN-.js","_app/immutable/chunks/D5T6RzI-.js","_app/immutable/chunks/BWX8WBqw.js","_app/immutable/chunks/0g7q4S4F.js","_app/immutable/chunks/hj4ma2IL.js"];
export const stylesheets = [];
export const fonts = [];
