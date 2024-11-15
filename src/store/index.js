import { createStore } from 'vuex';
import { db } from '../firebaseConfig';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

export default createStore({
  state: {
    users: []
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    addUser(state, user) {
      state.users.push(user);
    },
    removeUser(state, userId) {
      state.users = state.users.filter(user => user.id !== userId);
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const users = [];
      querySnapshot.forEach(doc => {
        users.push({ id: doc.id, ...doc.data() });
      });
      commit('setUsers', users);
    },
    async addUser({ commit }, user) {
      const docRef = await addDoc(collection(db, 'users'), user);
      commit('addUser', { id: docRef.id, ...user });
    },
    async removeUser({ commit }, userId) {
      await deleteDoc(doc(db, 'users', userId));
      commit('removeUser', userId);
    }
  },
  getters: {
    users: state => state.users
  }
});