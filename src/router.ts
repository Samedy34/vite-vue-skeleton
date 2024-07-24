import { createMemoryHistory, createRouter } from "vue-router";

const Page1 = () => import("@/views/Page1.vue");
const Page2 = () => import("@/views/Page2.vue");

const routes = [
  { path: "/", name: "index", component: Page1 },
  { path: "/page2", name: "page2", component: Page2 },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export { router };
