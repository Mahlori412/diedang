<script setup lang="ts">
import { computed, ref } from 'vue'
import { store } from '@/stores/store'
import type { APIResultInterface } from '@/interfaces';

const dataStore = store()

let errorMessage = ref('')
let selectedMathFact = ref('')
let selectedActivity = ref('')

const loading = computed(() => {
  return dataStore.loading
})

/**
* Flesh out the computed property for apiResults.
* Result should be an array of APIResultInterface.
*/
const apiResults = computed(() => {
  // [# Candidate to complete]
  // ...
  console.log('test')
  return true
})

/**
* Flesh out the computed property for hasResults.
* Use this property in the DOM to dynamically decide on 
* visibility of components.
*/
const hasResults = computed(() => {
  // [# Candidate to complete]
  // ...
  return false
})

/**
* Flesh out the method for fetchAPIData.
* Call the <code>fetch()</code> method in your store
* to fetch the API data.
*/
const fetchAPIData = async() => {
  try {
    // [# Candidate to complete]
    // ...
  }
  catch(e) {
    /**
    * Set the errorMessage.value property for any errors
    * you may throw from the service and state.
    */
    errorMessage.value = (e as any).message
  }
}

/**
* Flesh out the method for sortAPIData.
* Call the <code>sort()</code> method in your store
* to sort the API data.
*/
const sortAPIData = async() => {
  try {
    // [# Candidate to complete]
    // ...
  }
  catch(e) {
    /**
    * Set the errorMessage.value property for any errors
    * you may throw from the service and state.
    */
    errorMessage.value = (e as any).message
  }
}

const showFactAndActivity = (result: APIResultInterface) => {
  // [# Candidate to complete]
  // selectedMathFact.value = 
  // selectedActivity.value = 
}

const componentAlignmentClass = computed(() => {
  return (
    hasResults.value
    ?
    'myComponentContainer flexLeftAlign'
    :
    'myComponentContainer flexCenterAlign'
  )
})
</script>

<template>
  <div
    :class="componentAlignmentClass"
  >
    <div 
      v-if="!loading"
      class="buttonContainer"
    >
      <button 
        v-if="!errorMessage"
        type="button"
        @click="fetchAPIData()"
      >
        Fetch my data
      </button>

      <div style="margin-right:10px"></div>

      <button 
        v-if="!errorMessage && hasResults"
        type="button"
        @click="sortAPIData()"
      >
        Sort my data
      </button>
    </div>

    <span
      v-if="loading"
      class="loader"
    ></span>

    <div
      v-if="!loading"
      class="tableContainer"
    >
      <table v-if="hasResults">
        <thead>
          <!-- [# Candidate to complete v] -->
          <!-- .. -->
        </thead>

        <tbody>
          <!-- [# Candidate to complete v] -->
          <!-- .. -->
        </tbody>
      </table>
    </div>
    
    <div 
      v-if="hasResults && !loading"
      class="mathFactAndActivityClass"
    >
      <span class="boldText">Random Math Fact</span>
      <h4>
        <!-- [# Candidate to complete] -->
        <!-- .. -->
      </h4>

      <div style="margin-top:1rem;"></div>

      <span class="boldText">Random Activity</span>
      <h4>
        <!-- [# Candidate to complete] -->
        <!-- .. -->
      </h4>
    </div>
    
    <!-- Refactor: for uber brownie points, refactor this into its own component -->
    <div v-if="errorMessage">
      <div class="textBlock">
        <p class="textBlockTitle">
          Eager beaver!
        </p>
        <p>
          We like your enthusiasm but you have to build this first.
          <br/>
          <br/>
          <p>Start with <RouterLink to="/fetch"> Step 1 </RouterLink> and go from there.
          In theory (and practical) you could do the four steps in any order, 
          as long as the end result is the same and you've written neat and concise code.
          </p>
        </p>
      </div>
    </div>
    <!-- Refactor: for uber brownie points -->

  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
thead {
	background-color: hsla(198, 83%, 54%, 1);
	color: white;
	font-size: 0.875rem;
	text-transform: uppercase;
	letter-spacing: 2%
}
th, td {
  border: 1px solid hsla(198, 83%, 54%, 1);
  padding: 8px;
  text-align: left;
}

.tableContainer {
  margin-top: 0.5rem;
}

.buttonContainer {
  display: flex;
}

@media (min-width: 1024px) {
  .myComponentContainer {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.mathFactAndActivityClass {
  padding: 1.8rem 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  min-height: 195px;
}
.boldText {
  font-weight: bold;
}

</style>