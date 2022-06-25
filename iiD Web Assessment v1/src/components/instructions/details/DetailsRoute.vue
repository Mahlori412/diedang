<script setup lang="ts"></script>

<template>
  <br/>
  <br/>
  <p>
    In <code>/router/index.ts</code>, add a new route with the path <code>/my-component</code>.
    Make sure to lazy-load it to only import when the route is visited.
  </p>

  <br/>
  <p>
    After adding the route, create a navigation menu item
    on the home page to route to your new component.
  </p>
  <br/>

  <div 
    class="codeblock" 
    style="max-height: 250px; max-width: 520px;"
  >
    <pre> 
      const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
          {
            path: "/",
            name: "instructions",
            component: InstructionsView,
          },
          /**
          * Add the route to your new component - /my-component.
          * Make sure to lazy load it to only render when the
          * route is visited.
          */
          // {
          //   path: "",
          //   name: "",
          //   component: 
          // },
          ...
        ],
      })
    </pre>
  </div>

</template>

<style scoped></style>