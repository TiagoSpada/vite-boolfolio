<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";
export default {
	name: "Projects",
	components: {
		ProjectCard,
	},
	data() {
		return {
			api: {
				baseUrl: "http://127.0.0.1:8000/api/",
				endPoints: {
					projectList: "projects",
				},
				page: 1,
			},
			projects: [],
		};
	},
	methods: {
		getProjects() {
			const url = this.api.baseUrl + this.api.endPoints.projectList;
			console.log(url);
			axios
				.get(`${url}?page=${this.api.page}`)
				.then((response) => {
					// console.log(response.data);
					if (response.data.status && response.data.results.data.length) {
						this.projects = response.data.results;
						// console.log(this.projects);
					} else {
						console.log(error);
					}
				})
				.catch((error) => console.log(error));
		},
		previousPage() {
			this.api.page = this.api.page - 1;
			this.getProjects();
		},
		nextPage() {
			this.api.page = this.api.page + 1;
			this.getProjects();
		},
		changePage(index) {
			this.api.page = index;
			this.getProjects();
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
		<div class="container pb-5">
			<h1 class="mb-4">Projects</h1>
			<div class="row">
				<div v-for="project in projects.data" class="col-4 g-5">
					<ProjectCard :project="project" />
				</div>
			</div>
		</div>
		<!-- GESTIONE PAGINE -->
		<div class="d-flex justify-content-center">
			<nav>
				<ul class="pagination">
					<li class="page-item">
						<!-- pagina precedente -->
						<!-- bottone disabilitato se non esiste la pagina prima -->
						<button
							:class="{ disabled: projects.prev_page_url == null }"
							v-on:click="previousPage()"
							class="page-link"
						>
							Precedente
						</button>
					</li>
					<!-- prima pagina  -->
					<li class="page-item" v-if="projects.current_page !== 1">
						<button
							:class="{ disabled: 1 == projects.current_page }"
							class="page-link"
							v-on:click="changePage(1)"
						>
							{{ 1 }}
						</button>
					</li>
					<!-- pagina corrente -->
					<li class="page-item">
						<button class="page-link disabled">
							{{ projects.current_page }}
						</button>
					</li>
					<!-- ultima pagina -->
					<li
						class="page-item"
						v-if="projects.current_page !== projects.last_page"
					>
						<button
							:class="{ disabled: projects.last_page == projects.current_page }"
							class="page-link"
							v-on:click="changePage(projects.last_page)"
						>
							{{ projects.last_page }}
						</button>
					</li>
					<li class="page-item">
						<!-- pagina successiva -->
						<!-- bottone disabilitato se non esiste la pagina dopo -->
						<button
							:class="{ disabled: projects.next_page_url == null }"
							v-on:click="nextPage()"
							class="page-link"
						>
							Successiva
						</button>
					</li>
				</ul>
			</nav>
		</div>
	</main>
	<footer>FOOTER</footer>
</template>

<style></style>
