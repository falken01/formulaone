<template>
  <div class="driverDetails">
    <div class="driverInfo">
      <img
        width="100%"
        :title="driverDetails.Team.name"
        :src="require(`@/assets/${driverDetails.Team.name}.png`)"
      />
      <div id="mid">
        <h1>{{ driverDetails.Name }} {{ driverDetails.Surname }}</h1>

      </div>
      <img
        :title="driver"
        :src="require(`@/assets/${driverDetails.Surname}.png`)"
      />
      <div><h2>2</h2></div>
      <div><h1>2</h1></div>
      <div><h2>2</h2></div>
      <div><h2>Points</h2></div>
      <div><h1>Wins</h1></div>
      <div><h2>Races</h2></div>

      <other-drivers
        class="other-drivers"
        :driverId="driverDetails.id"
        :driverNationality="driverDetails.Nationality"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OtherDrivers from "../components/OtherDrivers";

export default {
  name: "DriverDetails",
  components: { OtherDrivers },
  data() {
    return {
      drivers: []
    };
  },
  props: {
    driver: {
      type: String,
      required: true
    }
  },
  computed: {
    driverDetails() {
      return this.drivers.find(dr => dr.Surname === this.driver);
    }
  },

  created() {
    axios
      .get("http://localhost:8000/all")
      .then(res => (this.drivers = res.data))
      .catch(err => alert(err));
  }
};
</script>

<style lang="scss" scoped>
.driverDetails {
  background: #eee;
  min-height: 100vh;
  margin: 10px;
  padding: 20px 100px 30px 100px;
  .driverInfo {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr 3fr 1fr;
  }
  .other-drivers {
    grid-column: 1/4;
  }
  #mid {
    display: grid;
  }
}
</style>
