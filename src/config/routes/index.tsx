import { PagesRoute } from "./types";
import { lazyLoad } from "../utils";
export * from "./types";

const Home = lazyLoad(() => import("pages/Home"));

/**The key "data" means that the page configuration is located here. The rest of the keys are the path given the breadCrumbs */

export const routes: PagesRoute = {
  "/": {
    data: {
      component: Home,
    },
  },

  "*": {
    data: {
      component: Home,
    },
  },
};