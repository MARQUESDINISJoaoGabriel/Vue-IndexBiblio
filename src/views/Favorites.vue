<template>
  <div class="favorites">
    <h1>Mes Favoris</h1>

    <div v-if="favorites.length">
      <LibraryItem 
        v-for="item in favorites" 
        :key="item.id" 
        :item="item"
      />
    </div>
    
    <p v-else>Aucun favori ajouté.</p>

    <router-link to="/library">
      <button class="back-btn">⬅ Retour à la bibliothèque</button>
    </router-link>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import LibraryItem from '../components/LibraryItem.vue';

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
.favorites {
  padding: 20px;
  text-align: center;
}
.back-btn {
  margin-top: 20px;
  padding: 10px;
  background-color: #91242f;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.back-btn:hover {
  background-color: #821721;
}
</style>
