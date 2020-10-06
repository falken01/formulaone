<template>
  <div>
    <div class="rem" v-if="this.remainingDrivers.length > 0">
      <h2>Remaining drivers of this nationality:</h2>
      <div class="others">
        <div v-for="driver in remainingDrivers" :key="driver.id">
          <router-link
            :to="{
              name: 'driver',
              params: { driver: driver.Surname, id: driver.id }
            }"
          >
            <card :driver="driver" />
          </router-link>
        </div>
        <router-view :key="$route.path" />
      </div>
    </div>
    <div class="notFound" v-else>
      <h1>Brak kierowców o tej samej narodowości</h1>
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
            dr => dr.id != this.driverId
          ))
      )
      .catch(err => console.log(err));
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
.notFound {
  padding: 90px 0px;
}
a {
  text-decoration: none;
}
@media (max-width: 900px) {
  .others{
    grid-template-columns: 1fr;
  }
}
</style>
