import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";

import ProjectDetail from "./pages/ProjectDetail.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: AppHome,
		},
		{
			path: "/project/:id",
			name: "detail",
			component: ProjectDetail,
		},
	],
});

export { router };
