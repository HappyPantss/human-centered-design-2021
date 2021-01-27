<template>
  <div class="container">
    <Main />
  </div>
</template>

<script>
import Main from "./components/Main.vue";
export default {
  name: "App",
  components: {
    Main,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  max-width: 60rem;
  height: 58rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0e518d;
  border-radius: 2.5%;
}
</style>