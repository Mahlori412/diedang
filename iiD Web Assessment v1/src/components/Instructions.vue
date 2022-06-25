<script setup lang="ts">
import { quests } from '@/constants'
import InstructionItem from "./InstructionItem.vue"
</script>

<template>
  <template
    v-for="quest in quests"
  >
  <InstructionItem 
    :link="quest.link"
  >
    <template #icon>
      <component 
        :is="quest.icon"
      />
    </template>

    <template #heading>
      {{ quest.heading }}
    </template>

    {{ quest.summary }}

  </InstructionItem>
  </template>
</template>