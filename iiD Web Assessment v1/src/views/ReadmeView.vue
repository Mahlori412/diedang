<script setup lang="ts"></script>
<template>
  <div class="readme">
    <div class="details">
      <h3>
        Quest Result
      </h3>
      <p>
        This is what the outcome of your battles should look like.
        A list showing 5 items with a clickable name field and a sort button
        to change the order.
      </p>
      <br/>

      <img
        class="gif"
        src="@/assets/result.gif"
      />
    </div>

    <div class="details">
      <h3>
        Quest Stack
      </h3>

      <div>
        <a href="https://vuejs.org/" target="_blank">VueJS 3</a>
        - Frontend framework
      </div>
      <div>
        <a href="https://pinia.vuejs.org/" target="_blank">Pinia</a>
        - State management library
      </div>
      <div>
        <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>
        - Javascript with syntax for types
      </div>
    </div>
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .readme {
    min-height: 100vh;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
  }
}

.details {
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 1rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.gif {
  width: 100%
}
</style>
