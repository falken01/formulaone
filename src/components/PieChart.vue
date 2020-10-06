<template>
  <div class="small">
    <pie-chart :chart-data="datacollection"></pie-chart>
  </div>
</template>

<script>
import PieChart from "../assets/charts/PieChart.js";

export default {
  components: {
    PieChart
  },
  data() {
    return {
      datacollection: null
    };
  },
  props: { apperances: Array },
  beforeMount() {
    console.log(this.apperances)
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.apperances[0].Surname, this.apperances[1].Surname],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["silver", "red"]
          }
        ]
      };
      this.datacollection.datasets[0].data = [
        this.apperances[0].Apperances,
        this.apperances[1].Apperances
      ];
    }
  }
};
</script>

<style>
.small {
  height: 200px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
