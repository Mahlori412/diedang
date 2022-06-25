<script setup lang="ts">
import { store } from "@/stores/store";
import { ref, watch, defineAsyncComponent } from "vue"
import { useRoute } from "vue-router"

const dataStore = store()
const route = useRoute()

let content = ref()
let loading = ref(false)
let showContent = ref(false)

watch(() => route.name, () => {
  setTimeout(() => {
    loadContent()
  }, 200)
}, { 
  immediate: true,
  deep: true
})

const loadContent = async () => {
  showContent.value = false
  loading.value = true

  switch (route.name) {
    case 'fetch':
      dataStore.setSelectedStep(1)
      
      content.value = defineAsyncComponent(
        () => import('@/components/instructions/Instruction.vue')
      )
      break
      
    case 'state':
      dataStore.setSelectedStep(2)
      
      content.value = defineAsyncComponent(
        () => import('@/components/instructions/Instruction.vue')
      )
      break
      
    case 'component':
      dataStore.setSelectedStep(3)
      
      content.value = defineAsyncComponent(
        () => import('@/components/instructions/Instruction.vue')
      )
      break
      
    case 'route':
      dataStore.setSelectedStep(4)
      
      content.value = defineAsyncComponent(
        () => import('@/components/instructions/Instruction.vue')
      )
      break

    case 'submit':
      dataStore.setSelectedStep(5)
      
      content.value = defineAsyncComponent(
        () => import('@/components/instructions/Instruction.vue')
      )
      break

    default:
      break
  }

  loading.value = false
  showContent.value = true
}

</script>

<template>
  <div 
    v-if="!loading && showContent"
  >
    <component 
      :is="content"
    />
  </div>
</template>

<style scoped></style>