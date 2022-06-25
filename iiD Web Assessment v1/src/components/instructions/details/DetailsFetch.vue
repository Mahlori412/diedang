<script setup lang="ts"></script>

<template>
  <br/>
  <br/>

  <div class="codeblock">
    <p><code>https://randomuser.me/api/</code></p>
    <p><code>http://numbersapi.com/random/math</code></p>
    <p><code>https://www.boredapi.com/api/activity</code></p>
  </div>
  
  <br/>
  <p>
    Define a contract for each endpoint by creating interfaces for them in the
    <code>interfaces</code> file.
  </p>
  <br/>

  <p>
    Create an interface called <code>APIResultInterface</code>
    and combine the results into a single object with properties from each:
  </p>
  <br/>

  <li>Email</li>
  <li>First name</li>
  <li>Last name</li>
  <li>Gender</li>
  <li>Country</li>
  <li>Random Math Fact</li>
  <li>Random Activity</li>
  <br/>

  <p>
    Use this array in your service to loop each endpoint, hit the API
    and set the result property:
  </p>
  <br/>

  <div class="codeblock" style="max-height: 250px">
    <pre> 
      private _endpoints: APIEndpoint[] = [
        { 
          name: 'user', 
          url: 'https://randomuser.me/api/', 
          result: null 
        },
        { 
          name: 'math', 
          url: 'http://numbersapi.com/random/math', 
          result: null 
        },
        { 
          name: 'activity', 
          url: 'https://www.boredapi.com/api/activity', 
          result: null 
        },
      ]
    </pre>
  </div>

</template>

<style scoped></style>