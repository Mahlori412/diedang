<script setup lang="ts">
import { computed } from "vue"
import { quests } from "@/constants"
import InstructionBase from "./InstructionBase.vue"
import { store } from "@/stores/store"

const dataStore = store()

const quest = computed(() => {
  return (quests as any)[dataStore.selectedStep]
})
</script>

<template>
  <InstructionBase>
    <template #heading>
      {{ quest.heading.replace(`Quest ${ dataStore.selectedStep }: `, `${ dataStore.selectedStep }. `) }}
    </template>

    {{ quest.summary }}

    <component 
      :is="quest.details"
    />

  </InstructionBase>
</template>

<style scoped></style>