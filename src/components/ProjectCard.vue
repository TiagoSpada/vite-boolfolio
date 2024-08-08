<script>
export default {
	name: "ProjectCard",
	props: ["title", "description", "id"],
	data() {
		return {};
	},
};
</script>

<template>
	<div class="card">
		<div class="card-header">{{ id }}</div>
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">{{ description }}.</p>
			<a href="#" class="btn btn-primary">Dettaglio</a>
		</div>
	</div>
</template>
