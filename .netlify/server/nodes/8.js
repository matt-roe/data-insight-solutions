import * as server from '../entries/pages/(front)/blog/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(front)/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(front)/blog/+page.server.js";
export const imports = ["_app/immutable/nodes/8.DMD5D0hY.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Cqsqj2da.js","_app/immutable/chunks/DdZzsM25.js","_app/immutable/chunks/CuzAL1UU.js","_app/immutable/chunks/C7Yc58XY.js","_app/immutable/chunks/D9d8x2BB.js","_app/immutable/chunks/BjvYje4g.js","_app/immutable/chunks/CvTF9ro2.js","_app/immutable/chunks/Btqr1v7E.js","_app/immutable/chunks/CZSsMgsx.js","_app/immutable/chunks/D_iqrDA_.js","_app/immutable/chunks/Bd45yka0.js","_app/immutable/chunks/CwN-rFay.js","_app/immutable/chunks/D_XZoSU-.js","_app/immutable/chunks/LP6iGGj8.js","_app/immutable/chunks/CwZsRLC-.js"];
export const stylesheets = [];
export const fonts = [];
