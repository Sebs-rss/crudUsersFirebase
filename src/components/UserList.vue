<template>
  <!-- Opción A: con un simple listado para probar que funciona -->
  <!-- <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.email }}
          <button @click="deleteUser(user.id)">Eliminar</button>
        </li>
      </ul>
    </div> -->

  <!-- Opción B: con una tabla más bonita -->
  <div>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button @click="deleteUser(user.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const users = computed(() => store.getters.users);

    const deleteUser = (userId) => {
      store.dispatch("removeUser", userId);
    };

    store.dispatch("fetchUsers");

    return {
      users,
      deleteUser,
    };
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
th,td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #1E3E62;
  font-weight: bold;
  color: white;
}

/* Alternar colores de filas */
/* tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
} */
tbody tr:nth-child(even) {
  background-color: #243642;
  color: #f9f9f9;
}

button {
  background-color: #f44336;
  color: white;
  border: solid 1px #3B1C32;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 8px;
}
button:hover {
  background-color: #d32f2f;
}
</style>
