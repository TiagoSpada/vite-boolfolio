<script>
export default {
	name: "ProjectCard",
	props: ["title", "description"],
	data() {
		return {};
	},
};
</script>

<template>
	<div>
		<h1>{{ title }}</h1>
		<p>{{ description }}</p>
	</div>
</template>
