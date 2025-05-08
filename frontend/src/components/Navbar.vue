<template>
  <v-app-bar app>
    <v-btn to="/" text>Login</v-btn>

    <v-btn to="/home" text>Home</v-btn>

    <v-btn v-if="isAdmin()" to="/admin" text>Admin</v-btn>

    <v-btn v-if="isAdmin() || isEditor()" to="/editor" text>Editor</v-btn>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"

const store = useStore()
const user = ref(store.state.user)

function isAdmin() {
  return user.value?.role.includes('admin')
}

function isEditor() {
  return user.value?.role.includes('editor')
}
</script>

<style scoped>
.navbar {
	display: flex;
	justify-content: space-between;
	width: 250px;
	margin: 0 auto;
}
</style>
