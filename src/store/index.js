import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drivers: []
  },
  getters: {
    driversCount() {}
  },
  actions: {
    fetchDrivers() {}
  },
  mutations: {
    setDrivers(state, drivers) {
        state.drivers = drivers
    }
  }
});
