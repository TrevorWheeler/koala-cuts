import { createMemoryHistory, createRouter } from "vue-router";

import ServiceAreaView from "@/components/ServiceAreaView.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  { path: "/", component: HomeView, name: "home" },
  { path: "/service-areas", component: ServiceAreaView, name: "service-areas" },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
