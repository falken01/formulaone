<template>
  <div class="ext">

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DriverType",
  props: {
    driver: {
      type: String,
      required: true
    },
    team: {
      type: String,
      required: true
    }
  },
  created() {
    axios
      .get("http://localhost:8000/all")
      .then(res => (this.remainingDrivers = (res.data.filter(dr => dr.Team !== this.team))))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
  .ext {
    display: grid;
  }
</style>
