<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue'
import type { Ref } from 'vue'
import { ref } from 'vue'
import { useHeroes } from '@/services/hero.service'
import { useRouter } from 'vue-router'

const { addHero } = useHeroes()
const router = useRouter()

const name: Ref<string | null> = ref(null)

const handleHero = () => {
  if (name.value !== null) {
    addHero(name.value)
  }
}
</script>

<template>
  <h1 class="title">Add your hero!</h1>
  <h2 class="title">Hero name: {{ name }}</h2>
  <div>name<input v-model="name" /></div>
  <StyledButton type="primary" @click="(handleHero(), router.push({ name: 'Hero-list' }))"
    >Add</StyledButton
  >
</template>
