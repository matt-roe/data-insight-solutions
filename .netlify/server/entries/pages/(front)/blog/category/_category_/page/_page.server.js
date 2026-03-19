import { redirect } from "@sveltejs/kit";
const load = async () => {
  throw redirect(301, `/blog/category`);
};
export {
  load
};
