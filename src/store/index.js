import Vuex from "vuex";
import Vue from "vue";
import * as driver from "./modules/driver.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    driver
  },
  state: {},
  getters: {},
  actions: {},
  mutations: {}
});
