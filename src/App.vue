<script>
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";
export default {
	name: "Projects",
	components: {
		ProjectCard,
	},
	data() {
		return {
			projects: [],
		};
	},
	methods: {
		getProjects() {
			const result = axios
				.get("http://127.0.0.1:8000/api/projects")
				.then((response) => {
					if (response.data.status && response.data.results.length) {
						this.projects = response.data.results;
						console.log(response.data.results);
					} else {
						console.log(error);
					}
				})
				.catch((error) => console.log(error));
		},
	},
	created() {
		this.getProjects();
	},
};
</script>

<template>
	<header>HEADER</header>
	<main>
		<div class="container">
			<h1 class="mb-4">Projects</h1>
			<div class="row">
				<div v-for="project in projects" class="col-4 g-5">
					<ProjectCard
						:title="project.title"
						:description="project.description"
						:id="project.id"
					/>
				</div>
			</div>
		</div>
	</main>
	<footer>FOOTER</footer>
</template>

<style></style>
