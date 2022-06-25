<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">

    <h1 class="green">{{ msg }}</h1>

    <h3>
      <p>You've made it to the technical assessment for iiDENTIFii's
      <a target="_blank">Web Developer</a> position.
      </p>

      <br/>
      <p>What's next?</p>

      <br/>
      <p>
        Complete the quests to unlock the next step in your interview journey.
        Use all your tricks, pull all the rabbits from your hat and show us you can do it!
      </p>
    </h3>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
