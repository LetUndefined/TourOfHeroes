<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import StyledButton from '@/components/StyledButton.vue'

const router = useRouter()
</script>

<template>
  <main class="layout-container">
    <h1 class="title">Tour of Heroes</h1>

    <div class="button-container">
      <StyledButton type="default" @click="router.push({ name: 'Dashboard' })">
        Dashboard
      </StyledButton>
      <StyledButton type="default" @click="router.push({ name: 'Hero-list' })">
        Heroes
      </StyledButton>
    </div>
    <RouterView />
  </main>
</template>

<style scoped>
.title {
  font-size: 1.5rem;
  color: grey;
  font-weight: bold;
}

.layout-container {
  margin: 2rem;
}

.button-container {
  display: flex;
  gap: 0.25rem;
}
</style>
