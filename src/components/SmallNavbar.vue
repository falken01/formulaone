<template>
  <div class="small-navbar">
    <router-link to="/">Strona Główna</router-link>
    <router-link to="/about">O stronie</router-link>
    <button @click="$emit('openTab')">Zaloguj</button>

  </div>
</template>

<script>
export default {
  name: "SmallNavbar"
};
</script>

<style scoped>
.small-navbar {
  display: none;
}
a {
  padding: 0 30px 0 0;
  text-decoration: none;
  font-family: Poppins, serif;
  color: #333;
}
button {
  border: none;
  background: none;
  padding: 0 30px 0 0;
  font-family: Poppins, serif;
  font-weight: bold;
  font-size: 16px;
  color: teal;
  outline: none;
  cursor: pointer;
}
@media (max-width: 900px) {
  .small-navbar {
    display: grid;
  }
  a,
  button {
    font-size: 18px;
  }
}
</style>
