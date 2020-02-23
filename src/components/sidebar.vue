<template>
  <div class="sidebar">
    <h3>Search Bar</h3>
    <label>
      <input @input="$emit('typing',searchValue)" v-model="searchValue" type="text" />
    </label>
    <div class="innerSidebar" v-for="driver in drivers" :key="driver.id">
      <racer-data :driver="driver" />
    </div>
  </div>
</template>

<script>
import RacerData from "./racerData";

export default {
  name: "sidebar",
  props: ["drivers"],
  components: { RacerData },
  data() {
    return {
      searchValue: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  height: 100vh;
  width: 300px;
  padding: 30px;
  background: rgb(204,204,204);
  background: linear-gradient(180deg, rgba(204,204,204,1) 56%, rgba(238,238,238,0) 100%);

  input {
    border: 0;
    padding-left: 6px;
    border-radius: 20px;
    background: #fff;
    height: 25px;
    margin-bottom: 15px;
  }
  .innerSidebar {
  }
}
</style>
