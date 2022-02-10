<template>
  <div>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/busquedas">Busquedas</router-link> |
    <router-link to="/ventas">Ventas</router-link> |
    <router-link to="/total">Total</router-link>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.move-right {
  position: absolute;
  right: 0;
}
.navbar-nav {
  background-color: #212529;
}
</style>
