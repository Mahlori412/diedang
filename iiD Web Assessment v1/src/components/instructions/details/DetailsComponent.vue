<script setup lang="ts"></script>

<template>
  <br/>
  <br/>
  <p>
    In the <code>/components/myComponent</code> directory, you'll find a templated Vue component.
    Using the outline provided, create the functionality from a UI perspective to show
    the API results from the state store you created in step 2.
  </p>
  <br/>
  <p>
    There's a table you can use but you need to flesh out the
    <code>header</code> and 
    <code>body</code> elements
    and bind the properties from the data object.
    Remember to add a loop in the <code>body</code> to iterate through all 
    the results.
  </p>
  <br/>
  <p>
    To display the <i>random math fact</i> and <i>activity</i> for each item, add a click event to
    the name and surname to set the properties <code>selectedMathFact</code>
    and <code>selectedActivity</code>.
  </p>
  <br/>

  <p>
    For extra brownie points, add a toggle button to sort the list by first name
    in ascending and descending order.
  </p>

  <br/>

  <div 
    class="codeblock" 
    style="max-height: 350px; max-width: 520px;"
  >
    <pre> 
      const apiResults = computed(() => {
        /**
        * Flesh out the computed property for apiResults.
        * Result should be an array of <code>APIResultInterface</code>.
        */
        ...
      })

      const hasResults = computed(() => {
        /**
        * Flesh out the computed property for hasResults.
        * Use this property in the DOM to dynamically decide on 
        * visibility of components.
        */
        ...
      })

      const fetchAPIData = async() => {
        /**
        * Flesh out the method for fetchAPIData.
        * Call the <code>fetch()</code> method in your store
        * to fetch the API data.
        */
        try {
          ...
        }
        catch(e) {
          /**
          * Set the errorMessage.value property for any errors
          * you may throw from the service and state.
          */
          ...
        }
      }
    </pre>
  </div>

</template>

<style scoped></style>