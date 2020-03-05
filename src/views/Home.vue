<template>
  <div class="home">
    <preloader v-show="this.loadingData"/>
    <div class="drivers">
      <div v-for="driver in drivers" :key="driver.id">
        <card :driver="driver" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Card from "../components/card";
import Preloader from "../components/preloader";
export default {
  name: "Home",
  components: {Preloader, Card },
  computed: {
    drivers(){
      return store.state.drivers
    }
  },
  created() {
    axios
      .get("http://localhost:8000/all")
      .then(res => (store.commit('setDrivers') = res.data))
      .catch(err => alert(err));
      this.loadingData=false;
  }
};
</script>
<style lang="scss" scoped>
.home {
  background: #eee;
  min-height: 100vh;

  padding: 20px 100px 30px 100px;
  margin: 10px;
}
.drivers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 6em;

}
@media (max-width: 1360px) {
  .drivers {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 900px) {
  .drivers {
    padding: 20px 50px 30px 50px;
    grid-gap: 2em;
  }
}
@media (max-width: 600px) {
  .home {
    padding: 0px;
  }
  .drivers {
    padding: 20px 0px 30px 0px;
    grid-template-columns: 1fr;
  }

}
</style>
