<template>
  <div class="card">
    <img alt="kierowca" :src="require(`@/assets/${driver.Surname}.png`)" />
    <div class="data">
      <div class="name">{{ driver.Name }} {{ driver.Surname }}</div>
      <div class="team">{{driver.Team.name}}</div>
      <div class="Number">No {{ driver.Number }}</div>
      <div class="Country">{{ driver.Nationality }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props:["driver"],

};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid grey;
  box-shadow: 2px 2px 6px;
  border-radius: 15px;
  background: #ccc;
  img{
    width: 45%;
    justify-content: center;
    height: auto;
    grid-column:1/3;
  }
  .data {

    display: grid;
    grid-template-columns: 1fr 1fr;
    div {
      padding: 8px;
      align-self: center;
    }
  }
}
</style>
