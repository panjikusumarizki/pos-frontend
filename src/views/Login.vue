<template>
    <div>
      <div id="wrapper">
        <form v-on:submit.prevent="onLogin">
            <h1>Login</h1>

            <div class="input-group">
                <label for="email-input">Email</label>
                <input type="email" v-model="form.email" id="email-input" autocomplete="off" required lang="en">
            </div>

            <div class="input-group">
                <label for="password-input">Password</label>
                <input type="password" v-model="form.password" id="password-input" autocomplete="off" required lang="en">
            </div>

            <div id="register-group">
              <h6>Don't have an account?</h6>
              <router-link to="/register"><a href="#" class="register-page"> Register</a></router-link>
            </div>

            <button type="submit" class="login-btn">Login</button>
        </form>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onLogin () {
      this.actionLogin(this.form).then((response) => {
        alert(response)
        if (response !== 'Email is wrong' && response !== 'Password is wrong') {
          window.location = '/'
        } else {
          localStorage.removeItem('token')
          localStorage.removeItem('refreshToken')
        }
      }).catch((err) => {
        alert(err)
      })
    },
    ...mapActions({
      actionLogin: 'auth/login'
    })
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

#register-group {
  display: flex;
  justify-content: center;
}

#register-group h6 {
  padding-right: 5px;
  color: #555;
}

.register-page {
    display: block;
    color: #777;
    text-transform: capitalize;
    font-size: 14px;
}

.login-btn {
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

.login-btn:active {
    box-shadow: inset -3px -3px 5px rgba(255, 255, 255, 0.4),
                inset 3px 3px 5px rgba(0, 0, 0, 0.09);
}
</style>
