import * as universal from '../entries/pages/(front)/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(front)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(front)/+page.js";
export const imports = ["_app/immutable/nodes/6.BC0gbYbq.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/9l8Gxslx.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Cqsqj2da.js","_app/immutable/chunks/DdZzsM25.js","_app/immutable/chunks/CuzAL1UU.js","_app/immutable/chunks/CwZsRLC-.js","_app/immutable/chunks/BIJMtWSO.js","_app/immutable/chunks/D_iqrDA_.js","_app/immutable/chunks/D_XZoSU-.js","_app/immutable/chunks/C7Yc58XY.js","_app/immutable/chunks/D9d8x2BB.js"];
export const stylesheets = ["_app/immutable/assets/6.BOTcU45Q.css"];
export const fonts = [];
