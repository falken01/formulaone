<template>
  <div class="card">
    <div class="imageWrap">
      <div class="image">
        <div class="test"></div>
        <div class="test">
          <div></div>
          <div>
            <img
              alt="kierowca"
              :src="require(`@/assets/${driver.Surname}.png`)"
            />
          </div>
          <div></div>
        </div>
        <div class="test"></div>
      </div>
    </div>
    <div class="data">
      <div class="name">{{ driver.Name }} {{ driver.Surname }}</div>
      <div class="team">{{ driver.Team.name }}</div>
      <div class="Number">No {{ driver.Number }}</div>
      <div class="Country">{{ driver.Nationality }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["driver"],

};
</script>

<style lang="scss" scoped>
$rot: 18deg;
$move:50px;

.card {
  border: 1px solid grey;
  box-shadow: 2px 2px 6px;
  border-radius: 15px;
  background: #ccc;

  .imageWrap {
    position: relative;
    display: block;
    overflow: hidden;

    .image {
      display: grid;
      position: relative;
      bottom: $move;
      left: 20px;
      z-index: 1;
      grid-template-columns: 1fr 1fr 1fr;
      transform: rotate($rot);
      max-height: 273px;

      img {
        transform: rotate(-$rot);
        position: relative;
        top: $move;
        right: 120px;
        justify-content: center;

        height: auto;
        grid-column: 1/3;
      }

      .test {
        background: transparent;

        height: 400px;
      }
      .test:nth-of-type(2) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        div {
          padding: 30px;
          background: #42b983;
        }
        div:nth-of-type(2)
        {
          width: 0;
          background: gainsboro;
          justify-content: end;
        }
      }
    }
  }
  .data {
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr;
    div {
      padding: 8px;
      align-self: center;
    }
  }
}
@media (max-width: 600px) {


}
</style>
