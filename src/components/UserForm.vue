<template>
    <div>
      <h3>👉🏻 Agregar Usuario/a</h3>
      <br>
        <form @submit.prevent="handleSubmit" class="user-form">
        <input v-model="name" type="text" placeholder="Nombre" required />
        <input v-model="email" type="email" placeholder="Correo" required />
        <button type="submit">Agregar Usuario</button>
      </form>
      <br>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const name = ref('');
      const email = ref('');
  
      const store = useStore();
  
      const handleSubmit = () => {
        const user = {
          name: name.value,
          email: email.value
        };
        store.dispatch('addUser', user);
        name.value = '';
        email.value = '';
      };
  
      return {
        name,
        email,
        handleSubmit
      };
    }
  };
  </script>

<style scoped>
input {
  width: 300px;
  height: 30px;
}

button {
    background-color: #1E3E62 ;
    color: white;
    border: solid 1px white;
    border-radius: 4px;
    height: auto;
    padding-left: .5rem;
    padding-right: .5rem;
}
.user-form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

</style>