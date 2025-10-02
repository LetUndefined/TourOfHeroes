<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue'
import { onMounted, ref, type Ref } from 'vue'
import type { Hero } from '@/components/models'
import { useRoute, useRouter } from 'vue-router'
import { useHeroes } from '@/services/hero.service'

const route = useRoute()
const router = useRouter()
const { findHero, updateHero, deleteHero } = useHeroes()

const hero: Ref<Hero | null> = ref(null)

onMounted(() => {
  console.log(route.params.id)
  const heroId = Number(route.params.id)
  hero.value = findHero(heroId)
})
</script>

<template>
  <template v-if="hero">
    <div class="title">{{ hero.name }} details!</div>

    <div>id: {{ hero.number }}</div>
    <div>name: <input v-model="hero.name" /></div>

    <StyledButton type="default" class="back-button" @click="router.go(-1)">Back</StyledButton>
    <StyledButton type="primary" @click="(updateHero(hero), router.go(-1))">Save</StyledButton>
    <StyledButton type="negative" @click="(deleteHero(hero), router.go(-1))">Delete</StyledButton>
  </template>
  <template v-else>
    <div class="title">Hero not found!</div>
  </template>
</template>

<style scoped>
.title {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.back-button {
  margin-top: 1rem;
}
</style>
