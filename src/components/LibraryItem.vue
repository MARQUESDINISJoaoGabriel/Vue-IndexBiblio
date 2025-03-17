<template>
    <div class="library-item">
      <img :src="item.cover" v-if="item.cover" alt="Couverture" class="cover" />
      <h3>{{ item.title }}</h3>
      <p><strong>{{ item.type === 'book' ? 'Auteur' : 'Réalisateur' }}:</strong> {{ item.author }}</p>
      <p><strong>Année:</strong> {{ item.year }}</p>
      <p>
        <strong>Statut:</strong> 
        <span :class="{ seen: item.status }">
          {{ item.status ? 'Vu' : 'Non vu' }}
        </span>
      </p>
      <div class="actions">
        <button @click="toggleStatus">
          {{ item.status ? "Pas vu." : 'Vu?' }}
        </button>
        <button @click="toggleFavorite">
          {{ isFavorite ? '(★) Retirer des favoris' : '(⠀) Ajouter aux favoris' }}
        </button>
        <button @click="deleteItem" class="delete">Supprimer</button>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    props: {
      item: Object
    },
    setup(props) {
      const store = useStore();
  
      const isFavorite = computed(() => store.state.favorites.includes(props.item.id));
  
      const toggleStatus = () => {
        store.dispatch('toggleStatus', props.item.id);
      };
  
      const toggleFavorite = () => {
        store.dispatch('toggleFavorite', props.item.id);
      };
  
      const deleteItem = () => {
        store.dispatch('deleteItem', props.item.id);
      };
  
      return {
        toggleStatus,
        toggleFavorite,
        deleteItem,
        isFavorite
      };
    }
  };
  </script>
  
  <style scoped>

    .cover {
    width: 100px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 10px;
    }

  .library-item {
    border: 1px solid #ddd;
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 8px;
    background: #f9f9f9;
  }
  .seen {
    color: green;
    font-weight: bold;
  }
  .actions button {
    margin-right: 5px;
    padding: 5px;
    cursor: pointer;
  }
  .delete {
    background: #91242f;
    color: white;
  }
  </style>
  