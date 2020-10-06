<template>
  <div class="driverDetails">
    <div v-if="driverDetails" class="driverInfo">
      <div class="driverData">
        <h1>{{ driverDetails.Name }} {{ driverDetails.Surname }}</h1>
        <img
          class="driverImage"
          :title="driver"
          :src="require(`@/assets/${driverDetails.Surname}.png`)"
        />
        <img
          class="carImage"
          :title="driverDetails.NameTeam"
          :src="require(`@/assets/${driverDetails.NameTeam}.png`)"
        />
      </div>
      <div class="chart">
        <doughnut-chart
          :FirstPlaces="driverDetails.FirstPlaces"
          :SecondPlaces="driverDetails.SecondPlaces"
          :ThirdPlaces="driverDetails.ThirdPlaces"
        />
        <h2>Podium</h2>
      </div>
      <div class="chart">
        <bar-chart :points="pointsChart" />
        <h2>Punkty</h2>
      </div>
      <div class="chart">
        <radar-chart :Poles="PolesFetch" />
      </div>
      <div class="chart">
        <pie-chart :apperances="apperancesFetch" />
        <h2>Występy</h2>
      </div>
      <other-drivers
        class="other-drivers"
        :driverId="driverDetails.id"
        :driverNationality="driverDetails.Nationality"
      />
    </div>
  </div>
</template>

<script>
import OtherDrivers from "../components/OtherDrivers";
import { mapGetters } from "vuex";
import DoughnutChart from "../components/doughnutChart";
import BarChart from "../components/barChart";
import PieChart from "../components/PieChart";
import RadarChart from "../components/RadarChart";

export default {
  name: "DriverDetails",
  components: {
    RadarChart,
    BarChart,
    DoughnutChart,
    OtherDrivers,
    PieChart
  },
  data() {
    return {
      loading: true
    };
  },
  props: {
    driver: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters("driver", [
      "driverDetails",
      "pointsChart",
      "apperancesFetch",
      "PolesFetch"
    ])
  },

  created() {
    console.log(this.driver);
    this.loading = true;
    this.$store
      .dispatch("driver/fetchDriver", this.driver)
      .then(() => (this.loading = false));
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
    grid-template-columns: 2fr 1fr 1fr;
    .driverData {
      display: grid;
      grid-row: 1/3;
      img {
        margin-right: auto;
        margin-left: auto;
        width: 300px;
        height: auto;
      }
      .driverImage {
        width: 250px;
        height: auto;
      }
    }
  }
  h2 {
    text-align: center;
  }
  .other-drivers {
    grid-column: 1/4;
  }
  #mid {
    display: grid;
  }
  @media (max-width: 900px) {
    .driverInfo {
      grid-template-columns: 1fr;
    }

    .driverData {
      grid-column: 1/2;
    }
    .other-drivers {
      grid-column: 1/2;
    }
  }
}
@media (max-width: 750px) {
  .driverDetails {
    padding: 0;
  }
}
</style>
