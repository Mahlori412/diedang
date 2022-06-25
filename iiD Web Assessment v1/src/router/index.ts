import { createRouter, createWebHistory } from "vue-router";
import InstructionsView from "../views/InstructionsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "instructions",
      component: InstructionsView,
    },
    /**
     * Add the route to your new component - /my-component.
     * Make sure to lazy load it to only render when the
     * route is visited.
     */
    // {
    //   path: "",
    //   name: "",
    //   component: 
    // },
    {
      path: "/readme",
      name: "readme",
      component: () => import("../views/ReadmeView.vue"),
    },
    {
      path: "/fetch",
      name: "fetch",
      component: () => import("../views/InstructionView.vue"),
    },
    {
      path: "/state",
      name: "state",
      component: () => import("../views/InstructionView.vue"),
    },
    {
      path: "/component",
      name: "component",
      component: () => import("../views/InstructionView.vue"),
    },
    {
      path: "/route",
      name: "route",
      component: () => import("../views/InstructionView.vue"),
    },
    {
      path: "/submit",
      name: "submit",
      component: () => import("../views/InstructionView.vue"),
    },
  ],
});

export default router;
