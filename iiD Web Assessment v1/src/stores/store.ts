import type { APIResultInterface } from "@/interfaces"
import { defineStore } from "pinia"

export const store = defineStore({
  id: "store",
  state: () => ({
    /**
     * The apiResults array will contain a list of combined
     * JSON objects returned by the API service.
     */
    apiResults: [] as APIResultInterface[],

    // State to indicate the selected step
    selectedStep: 0,

    // State to control the sort order
    sortAscending: false,

    // Loading indicator
    loading: false
  }),

  getters: {
    /**
     * Add a getter to return the total number of results
     * returned by the API.
     */
    // apiResultsCount: (state) => [# Candidate to complete]
  },

  actions: {
    /**
     * Flesh out the following method.
     * Add your service implementation from Step 1 here.
     */
    async fetch() {
      throw new Error('not_implemented')

      this.loading = true
      
      try {
        // [# Candidate to complete]
        // ..
      }
      finally {
        this.loading = false
      }
    },

    /**
     * Flesh out the following method.
     * Add your sort-by-firstname method for Step 3 here.
     * Make sure to make it toggleable, so in other words, 
     * clicking the 'sort' button should sort the data in 
     * ascending first, and then descending.
     */
    sort() {
      throw new Error('not_implemented')

      // [# Candidate to complete]
      // ...
    },

    // State to indicate the selected step
    setSelectedStep(index: number) {
      this.selectedStep = index
    }
  },
})
