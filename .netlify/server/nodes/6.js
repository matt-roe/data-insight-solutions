import * as universal from '../entries/pages/(front)/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(front)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(front)/+page.js";
export const imports = ["_app/immutable/nodes/6.DFUEcikw.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/9l8Gxslx.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CkOQWaMm.js","_app/immutable/chunks/c8uTe1KE.js","_app/immutable/chunks/D5T6RzI-.js","_app/immutable/chunks/BWX8WBqw.js","_app/immutable/chunks/0g7q4S4F.js","_app/immutable/chunks/hj4ma2IL.js","_app/immutable/chunks/CCmrP9Y9.js"];
export const stylesheets = [];
export const fonts = [];
