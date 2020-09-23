<template>
    <div>
        <b-container fluid>
            <b-navbar class="row" id="navbar">
                <div id="menu">
                    <img src="../assets/img/menu.png">
                </div>

                <div class="mx-auto" id="title">
                    <h4>{{title}}</h4>
                </div>

                <div id="logout">
                    <div id="logout-btn" @click="logout()">
                        <img src="../assets/img/logout.png">
                    </div>
                </div>

                <div id="cart">
                    <h4>Cart</h4>
                    <span id="ellips">
                        <h5>0</h5>
                    </span>
                </div>

                <div id="ic-cart">
                    <img src="../assets/img/cart.png">
                    <span id="cart-span"><p>0</p></span>
                </div>
            </b-navbar>
        </b-container>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import mixNav from '../mixins/nav'

export default {
  mixins: [mixNav],
  methods: {
    ...mapActions({
      onLogout: 'auth/logout'
    }),
    logout () {
      this.onLogout().then((response) => {
        alert(response)
        window.location = '/login'
      })
    }
  }
}
</script>
<style scoped>
#navbar {
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}

#navbar img {
    width: 25px;
    height: 25px;
}

#menu {
    cursor: pointer;
}

#title h4 {
    font-size: 23px;
    margin-bottom: 0;
}

#logout {
    padding-right: 20px;
    border-right: 1px solid rgba(73, 73, 73, 0.2);
    cursor: pointer;
}

#logout-btn {
    cursor: pointer;
}

#cart {
    display: flex;
    width: 30%;
    justify-content: center;
}

#cart h4 {
    font-size: 20px;
    margin-bottom: 0;
    padding-right: 5px;
}

#ellips {
    width: 25px;
    height: 25px;
    background-color: #57cad5;
    border-radius: 100vh;
    text-align: center;
    color: #fff;
    font-size: 20px;
}

#ellips h5 {
    margin-bottom: 0;
}

#ic-cart {
    display: none;
}

@media only screen and (max-width: 576px) {
    #logout {
        padding-right: 10px;
        border-right: 1px solid rgba(73, 73, 73, 0.2);
        cursor: pointer;
    }

    #cart {
        display: none;
    }

    #ic-cart {
        display: flex;
        align-items: center;
        padding-left: 10px;
    }

    #cart-span p {
        width: 20px;
        height: 20px;
        background-color: #57cad5;
        border-radius: 100vh;
        text-align: center;
        color: #fff;
    }
}
</style>
