import { redirect } from "@sveltejs/kit";
const load = () => {
  throw redirect(301, "/blog");
};
export {
  load
};
