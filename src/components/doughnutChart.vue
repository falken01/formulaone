<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
import LineChart from "../assets/charts/LineChart.js";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: null
    };
  },
  props:["FirstPlaces","SecondPlaces","ThirdPlaces"],
  beforeMount() {
    console.log(this.podiums);
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [" 1. miejsce"," 2.miejsce"," 3 miejsce"],
        legendPosition: 'left',
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["gold","silver","brown"],
          }
        ],
        options: {
          legend: {
            legendPosition: "left"
          }
        }
      };
      this.datacollection.datasets[0].data = [this.FirstPlaces, this.SecondPlaces, this.ThirdPlaces];
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
