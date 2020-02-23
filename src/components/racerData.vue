<template>
  <div class="racerData">
    <div class="number">{{ driver.Number }}</div>
    <div class="surname">
      <router-link
        :to="{
          name: 'driver',
          params: { driver: driver.Surname, id: driver.id }
        }"
        >{{ driver.Name }} {{ driver.Surname }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "racerData",
  props: ["driver"]
};
</script>

<style lang="scss" scoped>
.racerData {
  display: grid;
  align-self: start;
  grid-template-columns: 1fr 3fr;
  a {
    text-decoration: none;
  }
}
</style>
