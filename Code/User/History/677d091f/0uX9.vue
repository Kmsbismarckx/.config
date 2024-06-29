<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push(Router.routes.posts)">Posts</my-button>
      <my-button @click="$router.push(Router.routes.about)">About</my-button>
    </div>
  </div>
</template>

<script setup>
import {Router} from '@/Router'
console.log(Router);

</script>



<style scoped>
  .navbar {
    display: flex;
    height: 50px;
    background-color: lightblue;
    box-shadow: 2px 2px 4px gray;
    align-items: center;
    gap: 8px;
    padding: 0px 15px;
  }
  .navbar__btns {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>