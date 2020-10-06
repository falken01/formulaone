<template>
  <div class="login-tab">
    <form @submit.prevent="$emit('signIn', collectData)">
      <label>login:</label>
      <input type="text" v-model="login" />
      <label>Password:</label>
      <input type="password" v-model="password" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "loginTab",
  data() {
    return {
      login: "",
      password: ""
    };
  },
  computed: {
    collectData() {
      return {
        username: this.login,
        password: this.password
      };
    }
  }
};
</script>

<style scoped lang="scss">
.login-tab {
  padding: 10px 30px 10px 30px;
  z-index: 99;
  position: absolute;
  display: inline;
  text-align: center;
  border-radius: 15px;
  background: #dcdcdc;

  form {
    opacity: 1;
    display: grid;
    label {
      text-align: left;
    }
    input[type="text"],
    input[type="password"] {
      background: transparent;
      border-width: 0 0 1px 0;
      border-color: #111111;
      outline: none;
      margin-botto: 5px;
    }
    input[type="submit"] {
      margin-top: 5px;
      border-radius: 10px;
      outline: 0;
      border: 1px solid black;
    }
  }
}
</style>
