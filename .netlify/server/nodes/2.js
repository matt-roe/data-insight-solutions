import * as server from '../entries/pages/(admin)/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(admin)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(admin)/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.Cr2Za9g8.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DkR5_KNz.js","_app/immutable/chunks/D-85raQO.js","_app/immutable/chunks/DLZlQDRO.js"];
export const stylesheets = [];
export const fonts = [];
