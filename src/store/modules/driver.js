import axiosService from "@/services/axiosService";

export const namespaced = true;

export const state = {
  drivers: [],
  theDriver: []
};
export const getters = {
  allDrivers(state) {
    return state.drivers;
  },
  driverDetails(state) {
    return state.theDriver;
  },
  pointsChart(state) {
    const idD = state.theDriver.id;
    const sortedByPoints = state.drivers.sort((a, b) => b.Points - a.Points);
    const index = sortedByPoints.findIndex(el => el.id === idD);
    if (index == sortedByPoints.length - 1) {
      return [sortedByPoints[index], sortedByPoints[index - 1]];
    } else {
      return [sortedByPoints[index], sortedByPoints[index + 1]];
    }
  },
  apperancesFetch(state) {
    const idD = state.theDriver.id;
    const sortedByApperances = state.drivers.sort(
      (a, b) => b.Apperances - a.Apperances
    );
    const index = sortedByApperances.findIndex(el => el.id === idD);
    if (index == sortedByApperances.length) {
      return [sortedByApperances[index], sortedByApperances[index - 1]];
    } else {
      return [sortedByApperances[index], sortedByApperances[index + 1]];
    }
  },
  PolesFetch(state) {
    const idD = state.theDriver.id;
    const sortedByPolePositions = state.drivers.sort(
      (a, b) => b.PolePositions - a.PolePositions
    );
    const index = sortedByPolePositions.findIndex(el => el.id === idD);
    if (index == sortedByPolePositions.length) {
      return [sortedByPolePositions[index], sortedByPolePositions[index - 1]];
    } else {
      return [sortedByPolePositions[index], sortedByPolePositions[index + 1]];
    }
  }
};
export const actions = {
  fetchDrivers({ commit }) {
    return new Promise((resolve, reject) => {
      return axiosService
        .getDrivers()
        .then(res => {
          commit("SET_DRIVERS", res.data);
          resolve();
        })
        .catch(err => {
          console.log(err);
          reject();
        });
    });
  },
  resetState({ commit }) {
    commit("SET_DRIVERS", []);
  },
  async fetchDriver(context, driver) {
    if (!context.state.drivers.length > 0) await context.dispatch("fetchDrivers");
    const drive = context.state.drivers.find(el => el.Surname === driver);
    context.commit("SET_DRIVER", drive);
  }
};
export const mutations = {
  SET_DRIVERS(state, drivers) {
    state.drivers = drivers;
  },
  SET_DRIVER(state, drive) {
    state.theDriver = drive;
  }
};
