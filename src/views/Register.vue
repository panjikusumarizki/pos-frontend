<template>
  <div>
    <div id="wrapper">
      <form v-on:submit.prevent="onRegister">
        <h1>Register</h1>

        <div class="input-group">
          <label for="email-input">Email</label>
          <input type="email" v-model="form.email" id="email-input" autocomplete="off" required />
        </div>

        <div class="input-group">
          <label for="password-input">Password</label>
          <input
            type="password"
            v-model="form.password"
            id="password-input"
            autocomplete="off"
            required
          />
        </div>

        <router-link to="/login">
          <a href="#" class="login-page">Login</a>
        </router-link>

        <button type="submit" class="register-btn">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  }
}
</script>
<style scoped>
#wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
}

form {
  width: 320px;
  padding: 20px;
  box-shadow: -4px -4px 12px rgba(255, 255, 255, 0.5),
    4px 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  border-radius: 20px;
}

h1 {
  color: #777;
  text-align: center;
  text-transform: capitalize;
}

.input-group {
  margin: 30px 0;
}

.input-group label {
  display: block;
  color: #2ec1ac;
}

.input-group input {
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  box-shadow: inset -3px -3px 5px rgba(255, 255, 255, 0.4),
    inset 3px 3px 5px rgba(0, 0, 0, 0.09);
  color: #2ec1ac;
}

.login-page {
  display: block;
  color: #777;
  text-align: center;
  text-transform: capitalize;
  margin: 30px 0;
  font-size: 14px;
}

.register-btn {
  display: block;
  margin: 20px auto;
  border: none;
  outline: none;
  background-color: transparent;
  color: #777;
  padding: 12px 60px;
  box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.4),
    3px 3px 5px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
}

.register-btn:active {
  box-shadow: inset -3px -3px 5px rgba(255, 255, 255, 0.4),
    inset 3px 3px 5px rgba(0, 0, 0, 0.09);
}
</style>
