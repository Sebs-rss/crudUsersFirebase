<script >
/* <script setup> */

import UserForm from './components/UserForm.vue';
import UserList from './components/UserList.vue';

export default {
  components: {
    UserForm,
    UserList
  }
};

</script>

<template>
  <h1>🔥 M7 - Firebase Eval</h1>
  <hr>
  <br>
  <div id="app">
    <UserForm />
    <UserList />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  color: aliceblue;
  padding-bottom: 1rem;
}
</style>
