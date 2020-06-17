<template>
  <div id="app">
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

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
