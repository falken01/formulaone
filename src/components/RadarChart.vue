<template>
  <div>
    <div class="small" v-if="this.Poles[0].PolePositions>0 && this.Poles[1].PolePositions>0">
      <radar-chart :chart-data="datacollection"></radar-chart>
      <h2>Pole Position</h2>
    </div>
    <div v-else>
      {{this.Poles[0].Surname}} nie zdobył nigdy żadnego pole position.
    </div>
  </div>
</template>

<script>
import RadarChart from "../assets/charts/RadarChart.js";

export default {
  components: {
    RadarChart
  },
  data() {
    return {
      datacollection: null
    };
  },
  props: { Poles: Array },
  beforeMount() {
    console.log(this.Poles);
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.Poles[0].Surname,this.Poles[1].Surname],
        legendPosition: "left",
        datasets: [
          {
            label: "Kierowcy",
            backgroundColor: ["gold", "silver", "brown"]
          }
        ],
        options: {
          legend: {
            legendPosition: "left"
          }
        }
      };
      this.datacollection.datasets[0].data = [
        this.Poles[0].PolePositions,this.Poles[1].PolePositions
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
