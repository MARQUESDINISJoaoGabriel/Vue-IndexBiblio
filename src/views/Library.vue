<template>
    <div class="library">
      <h1>Ma Bibliothèque</h1>
      
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Rechercher par titre, auteur, année..."
        class="search-input"
      />
  
      <select v-model="filterStatus" class="status-filter">
        <option value="">Tout</option>
        <option value="read">Vu</option>
        <option value="unread">Non vu</option>

      </select>
  
      <div v-if="filteredLibrary.length">
        <LibraryItem 
          v-for="item in filteredLibrary" 
          :key="item.id" 
          :item="item"
        />
      </div>
      
      <p v-else>Aucun résultat trouvé.</p>
      
      <router-link to="/add">
        <button class="add-btn">+ Ajouter un livre/film +</button>
      </router-link>
    </div>
  </template>
  
  <script>
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';
  import LibraryItem from '../components/LibraryItem.vue';
  
  export default {
    components: { LibraryItem },
    setup() {
      const store = useStore();
      const library = computed(() => store.getters.getLibrary);
      
      const searchQuery = ref('');
      const filterStatus = ref('');
  
      const filteredLibrary = computed(() => {
        return library.value.filter(item => {
          const matchesSearch = item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                                item.author.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                                item.year.toString().includes(searchQuery.value);
          
          const matchesStatus = filterStatus.value ? 
                                (filterStatus.value === 'read' && item.status === true) || 
                                (filterStatus.value === 'unread' && item.status === false) ||
                                (filterStatus.value === 'watched' && item.isWatched === true) ||
                                (filterStatus.value === 'unwatched' && item.isWatched === false) : true;
  
          return matchesSearch && matchesStatus;
        });
      });
  
      return { searchQuery, filterStatus, filteredLibrary };
    }
  };
  </script>
  
  <style scoped>
  
  .search-input {
    margin-bottom: 15px;
    padding: 10px;
    width: 100%;
    max-width: 300px;
    margin: auto;
  }
  
  .status-filter {
    margin-bottom: 15px;
    padding: 10px;
    max-width: 200px;
    margin: auto;
  }
  </style>
  