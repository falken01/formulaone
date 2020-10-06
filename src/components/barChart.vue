<template>
  <div class="small">
    <bar-chart :chart-data="datacollection"></bar-chart>
  </div>
</template>

<script>
import BarChart from "../assets/charts/BarChart.js";

export default {
  components: {
    BarChart
  },
  props:{points: Array},
  data() {
    return {
      datacollection: null,
    };
  },
  beforeMount() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.points[0].Surname, this.points[1].Surname],
        datasets: [
          {
            label: "Punkty",
            backgroundColor: ["green", "red"]
          }
        ],
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      };
      this.datacollection.datasets[0].data = [this.points[0].Points, this.points[1].Points];
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
