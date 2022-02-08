<template>
  <div class="flex justify-space-between" id="nav">
    <img height="50" width="50" alt="Today logo" src="./assets/logo.png" />
    <div class="nav-links">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/settings">Settings</router-link>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "@/styles/_flex.scss";
@import "@/styles/_variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
}

#nav {
  border-bottom: 1px solid #ddd;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $primary;
    }
  }

  .nav-links {
    padding: 0 1rem;

    a {
      padding: 0 1rem;
    }
  }
}
</style>
