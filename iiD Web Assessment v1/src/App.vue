<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import HelloDeveloper from "@/components/HelloDeveloper.vue"
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloDeveloper msg="You did it!" />

      <nav>
        <RouterLink to="/">Instructions</RouterLink>
        <RouterLink to="/readme">Result</RouterLink>
        <RouterLink to="/readme">Result2</RouterLink>
        <!-- [# Candidate to add ] -->
        <!-- .. -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

button {
  padding: 10px 20px;
  border: 1px solid #28b1eb;
  color: #28b1eb;
  background-color: transparent;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.flexLeftAlign {
  display: flex;
  align-items: start;
}

.flexCenterAlign {
  display: flex;
  align-items: center;
}

.codeblock {
  break-inside: avoid;
  /* background-color: #161f32; */
  background-color: var(--color-codeblock);
  border-radius: 8px;
  padding: 10px 20px;
  transition: background-color .5s;
  overflow: auto;
}

.textBlock {
  margin: 28px 0;
  padding: 20px 24px 4px 42px;
  border-radius: 8px;
  border: 1px solid var(--vt-c-pop);
  overflow-x: auto;
  transition: color .5s,background-color .5s;
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 500;
  color: #0000008c;
  background-color: #f9f9f9;
}
.textBlock p {
  margin-bottom: 1.2em;
}
.textBlock::before {
  content: "\24d8";
  position: absolute;
  font-weight: 600;
  font-size: 15px;
  top: 20px;
  left: 17px;
}
.textBlockTitle {
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: 500;
  color: var(--vt-c-text-1);
  transition: color .5s;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(198, 83%, 54%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    color: hsla(198, 83%, 54%, 0.2);
    cursor: pointer;
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

pre {
  margin-left: -35px;
}

/**
  * CSS Ice cream loader
  * <span class="loader"></span>
 */
.loader {
  height: 150px;
	width: 100px;
	border-radius: 55px 55px 10px 10px;
	position: relative;
  background: #FF3D00;

background-image: linear-gradient(0deg,
    #f63a99 25%,
    #30dcf6 25%,
    #30dcf6 25%,
    #30dcf6 50%,
    #f2d200 50%,
    #f2d200 50%,
    #f2d200 75%,
    #70ca5c 75%);
	background-position: 0px 0px;
  background-size: auto 175px;
	background-repeat: repeat-y;
  animation: colorShift 6s linear infinite;
}
.loader:before {
    content: '';
    position: absolute;
    left: 10px;
    bottom: 15px;
    width: 15px;
    height: 100px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.5);
  }

.loader:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50% , 0);
  box-shadow: 0 15px 2px rgba(0, 0, 0, 0.25) inset;
	width: 32px;
  height: 45px;
  background: #E09C5F;
  border-radius: 0 0 12px 12px;
}

@keyframes colorShift {
  to { background-position: 0 175px }
}

</style>
