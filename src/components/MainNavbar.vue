<template>
  <nav>
    <router-link to="/">
      <img alt="formula1" src="@/assets/f1.png" />
    </router-link>
    <small-navbar class="small-navbar" @openTab="$emit('openTab')" />
    <div class="svgg" @click="$emit('showHidBar')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path
          d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        />
      </svg>
    </div>
  </nav>
</template>

<script>
import SmallNavbar from "./SmallNavbar";
export default {
  name: "MainNavbar",
  components: {SmallNavbar}
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
$imgsize: 120px;
nav {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  background: #ccc;
  box-shadow: 2px 2px 6px;


  img {
    height: $imgsize;
    width: $imgsize;
  }
  div {
    padding: 10px;
    svg {
      height: 25px;
      width: 25px;
      margin-right: 15px;
      cursor: pointer;
    }
  }
  .small-navbar {
    display: flex;
  }
  @media (max-width: 900px) {
    .small-navbar {
      display: none;
    }
  }
}
</style>
