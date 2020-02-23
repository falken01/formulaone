<template>
  <div class="rem" v-if="this.remainingDrivers.length > 0">
    <h2>Remaining drivers of this nationality:</h2>
    <div class="others">
      <div v-for="driver in remainingDrivers" :key="driver.id">
        <router-link
          :to="{
            name: 'driverType',
            params: { team: driver.Team.name }
          }"
        >
          <card :driver="driver" />
        </router-link>
      </div>
      <router-view :key="$route.path"/>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import card from "./card.vue";
export default {
  name: "OtherDrivers",
  components: { card },
  props: ["driverNationality", "driverId"],
  data() {
    return {
      remainingDrivers: []
    };
  },
  created() {
    axios
      .get(`http://localhost:8000/nationality?q=${this.driverNationality}`)
      .then(
        res =>
          (this.remainingDrivers = res.data.filter(
            dr => dr.id !== this.driverId
          ))
      )
      .catch(err => alert(err));
  }
};
</script>

<style scoped>
.others {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4em;
  padding: 30px;
}
a {
  text-decoration: none;
}
</style>
