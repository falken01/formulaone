<template>
  <div id="app">
    <navbar @showHidBar="isSeen = !isSeen" />
    <transition name="slide" type="out-in">
      <sidebar v-if="isSeen" :drivers="drivers" @typing="dataFilter" />
    </transition>
    <transition name="fade" type="out-in">
      <router-view :key="$route.path"/>
    </transition>
    <footer>Formula 1</footer>
  </div>
</template>
<script>
import Navbar from "./components/navbar";
import axios from "axios";
import Sidebar from "./components/sidebar";

export default {
  components: { Sidebar, Navbar },
  data() {
    return {
      isSeen: false,
      drivers: [],

    };
  },
  watch: {
    $route() {
      this.isSeen = false;

    }
  },
  methods: {
    dataFilter(searchValue) {
      setTimeout(() => {
        axios
          .get(`http://localhost:8000/spec?q=${searchValue}`)
          .then(res => (this.drivers = res.data))
          .catch(err => alert(err));
      }, 500);
    }
  },
  created() {
    axios
      .get("http://localhost:8000/all")
      .then(res => this.drivers = res.data)
      .catch(err => alert(err));
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #eee;
  font-family: Poppins;

  footer {
    display: grid;
    background: #bbb;
    padding: 40px;
    box-shadow: 1px 1px 16px #111;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-30%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
