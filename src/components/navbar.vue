<template>
  <nav>
    <img alt="formula1" src="@/assets/f1.png" @click="$emit('showHidBar')" />
    <router-link to="/">Strona Główna</router-link>
    <router-link to="/about">O stronie</router-link>
    <router-link :to="{name:'AddDriver'}">Dodaj Kierowcę</router-link>
  </nav>
</template>

<script>
export default {
  name: "navbar",

};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
$imgsize: 120px;
nav {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr 14fr;
  padding: 5px;
  background: #ccc;
  box-shadow: 2px 2px 6px;
  a {
    align-self: center;
    padding: 5px;
    text-decoration: none;
    font-family: Poppins, serif;
    color: #333;
  }

  img {
    height: $imgsize;
    width: $imgsize;
  }
}
</style>
