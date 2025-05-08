<template>
  <p>Welcome {{ user?.username }}!</p>
</template>


<script setup>
import { computed } from "vue"
import { useStore } from "vuex"

const store = useStore()
const user = computed(() => store.state.user)

</script>