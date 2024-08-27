<script>
export default {
	name: "ProjectCard",
	props: ["project"],
	data() {
		return {};
	},
};
</script>

<template>
	<div class="card">
		<div class="card-header">{{ project.id }}</div>
		<div class="card-body">
			<h5 class="card-title">{{ project.title }}</h5>
			<p class="card-text">{{ project.description }}.</p>
			<router-link
				:to="{ name: 'detail', params: { id: project.id } }"
				class="btn btn-outline-primary"
			>
				Dettagli
			</router-link>
			<!-- <a href="#" class="btn btn-primary">Dettaglio</a> -->
		</div>
	</div>
</template>
