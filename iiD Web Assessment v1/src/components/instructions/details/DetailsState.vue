<script setup lang="ts"></script>

<template>
  <!-- <p>
    Using
    <a href="https://pinia.vuejs.org/" target="_blank">Pinia</a>
    as store library, create state, getters and actions in the existing store to manage and expose API data
    to the views.
  </p> -->

  <br/>

  <p>
    In the stores directory, edit the <code>stores</code> file and do the following:
  </p>
  <br/>

  <li>
    Edit the <code>fetch()</code> method and implement your service API call.
    <p>
      The results of your fetch must set the existing store property <code>apiResults</code>
      and will contain the list of data returned by your service.
    </p>
  </li>
  <br/>
  <li>
    Add a getter called <code>apiResultsCount</code> to return the total number of results fetched by the API.
  </li>
  <br/>
  <li>
    For extra brownie points, flesh out the <code>sort()</code> method to allow sorting of your data by first name
    in ascending and descending order.
  </li>
  <br/>
  <br/>

  <div 
    class="codeblock" 
    style="max-height: 250px; max-width: 520px;"
  >
    <pre> 
      export const store = defineStore({
        id: "store",
        state: () => ({
          /**
          * The apiResults array will contain a list of combined
          * JSON objects returned by the API service.
          */
          apiResults: [] as APIResultInterface[],

          // State to indicate the selected step (don't remove this)
          selectedStep: 0
        }),

        getters: {
          /**
          * Add a getter to return the total number of results
          * returned by the API.
          */
          ...
        },

        actions: {
          async fetch() {
            /**
            * Add your service implementation from Step 1 here.
            */
            throw new Error('not_implemented')
          },
          
          sort() {
            /**
            * Add your sort method for Step 3 here.
            */
            throw new Error('not_implemented')
          },

          // State to indicate the selected step (don't remove this)
          setSelectedStep(index: number) {
            this.selectedStep = index
          }
        },
      })
    </pre>
  </div>
  
</template>

<style scoped></style>