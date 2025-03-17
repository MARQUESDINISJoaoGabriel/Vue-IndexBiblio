<template>
    <div class="favorites-list">
      <h2>🌟 Mes Favoris</h2>
  
      <div v-if="favorites.length">
        <LibraryItem 
          v-for="item in favorites" 
          :key="item.id" 
          :item="item"
        />
      </div>
      
      <p v-else>Aucun favori ajouté.</p>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import LibraryItem from './LibraryItem.vue';
  
  export default {
    components: { LibraryItem },
    setup() {
      const store = useStore();
      const favorites = computed(() => store.getters.getFavorites);
  
      return { favorites };
    }
  };
  </script>
  
  <style scoped>
  .favorites-list {
    padding: 20px;
    text-align: center;
  }
  </style>
  