import * as server from '../entries/pages/(front)/blog/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(front)/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(front)/blog/+page.server.js";
export const imports = ["_app/immutable/nodes/8.DiychHg-.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DkR5_KNz.js","_app/immutable/chunks/D-85raQO.js","_app/immutable/chunks/52vx-AyL.js","_app/immutable/chunks/Bqj-aJ4G.js","_app/immutable/chunks/8kaILB1Y.js","_app/immutable/chunks/CJXGQo_d.js","_app/immutable/chunks/DucyK5O1.js","_app/immutable/chunks/D20QgE4l.js","_app/immutable/chunks/DflCR9Qu.js","_app/immutable/chunks/DKhmySEv.js","_app/immutable/chunks/BNcjBQcb.js","_app/immutable/chunks/CwN-rFay.js","_app/immutable/chunks/XRmZJsHY.js","_app/immutable/chunks/BMTlzbIL.js","_app/immutable/chunks/CCmrP9Y9.js"];
export const stylesheets = [];
export const fonts = [];
