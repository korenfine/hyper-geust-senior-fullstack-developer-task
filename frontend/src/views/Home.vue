<template>
	<div class="home">
		<h1>Home Page</h1>
    <WelcomeTitle />
	</div>
</template>

<script setup>
import { ref } from "vue"
import WelcomeTitle from "../components/WelcomeTitle.vue";

const username = ref("")
</script>

<style scoped>
.home {
	padding: 2rem;
	text-align: center;
}
</style>
