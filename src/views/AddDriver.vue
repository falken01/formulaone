<template>
  <div class="addDriver">
    <h2>Dodaj kierowcę</h2>

    <form
      method="POST"
      action="http://127.0.0.1:8000/newDriver"
      enctype="multipart/form-data"
    >
      <section>
        <label>
          <input placeholder="imię" name="name" type="text" />
        </label>
        <label>
          <input placeholder="nazwisko" name="surname" type="text" />
        </label>
        <label>
          <input placeholder="numer" name="number" type="text" />
        </label>
        <label>
          <input placeholder="narodowość" name="nationality" type="text" />
        </label>
        <label id="image">
          <input placeholder="obrazek" name="image" type="file" />
        </label>
        <label>
          <input type="submit" />
        </label>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddDriver"
};
</script>

<style lang="scss" scoped>
.addDriver {
  margin: 10px;
  background: #eee;
  height: 100vh;
}
section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  label:nth-of-type(even) {
    text-align: left;
  }
  label:nth-of-type(odd) {
    text-align: right;
  }
  #image {
    grid-column: 1/3;
    grid-row: 3;
    text-align: center;
  }
  input {
    background: rgba(170, 169, 169, 0.5);
    border: 0;
    border-radius: 6px;
    border-bottom: 1px solid black;
    margin: 12px;
    height: 30px;
    padding: 6px;
    box-shadow: 1px 1px 3px;
  }
  label:last-child {
    grid-column: 1/3;
    grid-row: 4;
    text-align: center;
    input {
      width: 200px;
    }
  }
}
</style>
