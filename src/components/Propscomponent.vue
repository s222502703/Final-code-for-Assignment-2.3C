<script setup>
import { ref } from 'vue'

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])
</script>

<template>
  <Propscomponent
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
  ></Propscomponent>
</template>