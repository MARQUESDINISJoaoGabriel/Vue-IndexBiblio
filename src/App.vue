<template>
  <div id="app">
    <header>
      <h1>INDEX BIBLIOTHEQUE<p>par JOAO GABRIEL MARQUES DINIS B2IN</p></h1>
      <nav>
        <router-link to="/library">Bibliothèque</router-link> |
        <router-link to="/favorites">Favoris</router-link> |
        <router-link to="/add">Ajouter</router-link>
      </nav>
    </header>
    
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

p {
  font-size: 14px;
}

header {
  background-color: #91242f;
  color: white;
  padding: 10px;
}

nav {
  margin-top: 10px;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 20px;
}
</style>
