<script>
import axios from "axios";

export default {
	name: "Projects",
	data() {
		return {
			projects: [],
		};
	},
	methods: {
		getProjects() {
			const results = axios
				.get("http://127.0.0.1:8000/api/projects")
				.then((response) => {
					if (response.data.status && response.data.results.length) {
						this.projects = response.data.results;
						console.log(this.projects);
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
			<h1>Projects</h1>
		</div>
	</main>
	<footer>FOOTER</footer>
</template>

<style></style>
