<template>
  <div class="preloader">
    <img
      src="https://thumbs.gfycat.com/ImprobablePertinentGraysquirrel-size_restricted.gif"
    />
  </div>
</template>

<script>
export default {
  name: "preloader"
};
</script>

<style lang="scss" scoped>
.preloader {
  display: grid;
  padding: 100px;
  justify-content: center;
  img {
    height: 50px;
    width: 50px;
  }
}
</style>
