<template>
    <div class="add-page">
      <h1>+ Ajouter un Livre ou un Film +</h1>
  
      <form @submit.prevent="addItem">
        <div>
          <label for="title">Titre :</label>
          <input type="text" id="title" v-model="newItem.title" required />
        </div>
  
        <div>
          <label for="author">Auteur/Réalisateur :</label>
          <input type="text" id="author" v-model="newItem.author" required />
        </div>
  
        <div>
          <label for="year">Année :</label>
          <input type="number" id="year" v-model="newItem.year" required />
        </div>
  
        <div>
          <label>Type :</label>
          <select v-model="newItem.type">
            <option value="book">Livre</option>
            <option value="movie">Film</option>
          </select>
        </div>
  
        <button type="submit" class="add-btn">Ajouter</button>
      </form>
  
      <router-link to="/library">
        <button class="back-btn">⬅ Retour</button>
      </router-link>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const store = useStore();
      const router = useRouter();
  
      const newItem = reactive({
        title: '',
        author: '',
        year: '',
        type: 'book',
        status: false,
        id: Date.now()
      });
  
      const addItem = () => {
        store.dispatch('addItem', { ...newItem });
        router.push('/library');
      };
  
      return { newItem, addItem };
    }
  };
  </script>
  
  <style scoped>
  .add-page {
    padding: 20px;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: auto;
  }
  form div {
    margin-bottom: 10px;
  }
  input, select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .add-btn, .back-btn {
    margin-top: 10px;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  .add-btn {
    background-color: #e44545;
    color: white;
  }
  .add-btn:hover {
    background-color: #882121;
  }
  .back-btn {
    background-color: #91242f;
    color: white;
  }
  .back-btn:hover {
    background-color: #91242f;
  }
  </style>
  