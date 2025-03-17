<template>
    <div class="add-item">
      <div>
        <label for="title">Titre :</label>
        <input type="text" id="title" v-model="newItem.title" required />
      </div>

      <div>
        <label for="cover">Image de couverture :</label>
        <input type="url" id="cover" v-model="newItem.cover" placeholder="URL de l'image" />
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
  
      <button @click="addItem">Ajouter</button>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    props: ['onAdd'],
    setup(props) {
      const store = useStore();
  
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
        if (props.onAdd) {
          props.onAdd();
        }
      };
  
      return { newItem, addItem };
    }
  };
  </script>
  
  <style scoped>
  .add-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
    margin: auto;
  }
  </style>
  