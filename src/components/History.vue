<template>
    <div>
        <div class="container-fluid">
            <b-navbar class="row" id="navbar">
                <div class="menu">
                    <img src="../assets/img/menu.png" alt="">
                </div>

                <div class="title mx-auto">
                    <h4>History</h4>
                </div>

                <div id="logout">
                    <div id="logout-btn" @click="logout()">
                        <img src="../assets/img/logout.png">
                    </div>
                </div>
            </b-navbar>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-1 left-content" id="side-menu">
                    <div id="left-menu">
                        <div id="fork"><img src="../assets/img/fork.png"></div>
                        <div id="clipboard"><img src="../assets/img/clipboard.png"></div>
                        <div id="add"><img src="../assets/img/add.png"></div>
                    </div>
                </div>

                <div id="bottom-menu">
                    <div id="bottom-menu-content">
                        <div id="fork-bottom"><img src="../assets/img/fork.png"></div>
                            <div id="clipboard-bottom"><img src="../assets/img/clipboard.png"></div>
                        <div id="add-bottom"><img src="../assets/img/add.png"></div>
                    </div>
                </div>

                <div class="col-md-11 center-content">
                    <div class="row">
                        <div class="col-md-3 my-3 box box-1">
                            <div class="circle">
                                <img src="../assets/img/red-circle.png">
                            </div>
                            <div class="box-content">
                                <p class="box-content-title">Today's Income</p>
                                <h3 class="box-content-value">Rp. 1.000.000</h3>
                                <p class="box-content-percent">+2% Yesterday</p>
                            </div>
                        </div>

                        <div class="col-md-3 my-3 box box-2">
                            <div class="circle">
                                <img src="../assets/img/blue-circle.png">
                            </div>
                            <div class="box-content">
                                <p class="box-content-title">Orders</p>
                                <h3 class="box-content-value">3.270</h3>
                                <p class="box-content-percent">+5% Last Week</p>
                            </div>
                        </div>

                        <div class="col-md-3 my-3 box box-3">
                            <div class="circle">
                                <img src="../assets/img/purple-circle.png">
                            </div>
                            <div class="box-content">
                                <p class="box-content-title">This Year's Income</p>
                                <h3 class="box-content-value">Rp. 100.000.000.000</h3>
                                <p class="box-content-percent">+10% Last Year</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-11 charts">
                        <div class="ch-revenue">
                            <div class="revenue">Revenue</div>
                            <div class="month-wrapper">
                                <div class="month">
                                    <p>Month</p>
                                    <div class="drop-img">
                                    <img src="../assets/img/arrow.png">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-11 order-table">
                        <div class="ch-order">
                            <div class="recent">Recent Order</div>
                            <div class="day-wrapper">
                            <div class="today">
                                <p>Today</p>
                                <div class="drop-img">
                                <img src="../assets/img/arrow.png">
                                </div>
                            </div>
                            </div>
                        </div>
                        <table class="table text-center">
                            <tr class="col-12">
                            <th>INVOICES</th>
                            <th>CASHIER</th>
                            <th>DATE</th>
                            <th>ORDERS</th>
                            <th>AMOUNT</th>
                            </tr>

                            <tr v-for="history in hist" :key="history.id">
                            <td>{{history.invoices}}</td>
                            <td>{{history.cashier}}</td>
                            <td>{{history.date}}</td>
                            <td>{{history.orders}}</td>
                            <td>Rp. {{history.amount}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
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

#logout {
    padding-right: 20px;
    cursor: pointer;
}

#logout-btn {
    cursor: pointer;
}

.left-content {
  background-color: #fff;
  padding-top: 32px;
  margin-right: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

#left-menu {
  text-align: center;
}

#left-menu img {
  width: 33px;
  height: 33px;
}

#fork,
#clipboard,
#add {
  padding-bottom: 50px;
}

#bottom-menu {
  display: none;
}

.box {
    width: 500px;
    height: 170px;
    border-radius: 10px;
    margin-top: 25px;
    margin-left: 60px;
    margin-right: 30px;
}

.box-1 {
    background: linear-gradient(278.29deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
}

.box-2 {
    background: linear-gradient(278.29deg, #29DFFF 30.05%, rgba(41, 223, 255, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25));
}

.box-3 {
    background: linear-gradient(278.29deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.25));
}

.box-content {
    position: relative;
    z-index: 3;
}

.box-content-title {
    padding-top: 40px;
    margin-bottom: 0;
    font-size: 15px;
}

.box-content-value {
    font-size: 25px;
}

.box-content-percent {
    font-size: 15px;
}

.circle {
    position: absolute;
    margin-left: 150px;
    margin-top: 10px;
    z-index: 0;
    opacity: 0.8;
}

.circle img {
    width: 130px;
    height: 100px;
}

.month {
    display: flex;
    height: 20px;
    width: 70px;
    text-align: center;
    font-size: 12px;
    background: #CECECE;
    border-radius: 10px;
}

.month-wrapper {
    padding-top: 20px;
}

.month p {
    padding-top: 1px;
    padding-left: 8px;
}

.month img {
    width: 9px;
    height: 10px;
}

.revenue {
    font-size: 25px;
    padding-top: 13px;
    padding-bottom: 30px;
}

.charts {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-top: 60px;
    margin-bottom: 60px;
    margin-left: 50px;
}

.ch-revenue {
    display: flex;
    justify-content: space-between;
}

.ch-order {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
}

.recent {
    font-size: 25px;
    padding-top: 13px;
}

.day-wrapper {
    padding-top: 20px;
}

.today p {
    padding-top: 1px;
    padding-left: 8px;
}

.today {
    display: flex;
    height: 20px;
    width: 70px;
    text-align: left;
    font-size: 12px;
    background: #CECECE;
    border-radius: 10px;
}

.today img {
    width: 9px;
    height: 10px;
}

.table td {
    color: #CECECE;
}

.table th {
    font-size: 15px;
}

.order-table {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-bottom: 20px;
    margin-left: 50px;
}

.drop-img {
    padding-left: 6px;
}

@media only screen and (max-width: 576px) {
    .left-content {
        display: none;
    }

    #bottom-menu {
        display: block;
        position: fixed;
        bottom: 0;
        padding-top: 10px;
        padding-bottom: 15px;
        background-color: #fff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        z-index: 10;
    }

    #bottom-menu {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }

    #bottom-menu-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #bottom-menu-content img {
        width: 30px;
        height: 30px;
    }

    .box {
        margin-left: 30px;
        margin-right: 30px;
    }

    .charts {
        margin: 0 auto;
        padding-bottom: 10px;
    }

    .order-table {
        margin: 0 auto;
        padding-bottom: 100px;
    }
}

@media only screen and (max-width: 768px) {
    .left-content {
        display: none;
    }

    #bottom-menu {
        display: block;
        position: fixed;
        bottom: 0;
        padding-top: 10px;
        padding-bottom: 15px;
        background-color: #fff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        z-index: 10;
    }

    #bottom-menu {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }

    #bottom-menu-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #bottom-menu-content img {
        width: 30px;
        height: 30px;
    }

    .box {
        margin-left: 30px;
        margin-right: 30px;
    }

    .charts {
        margin: 0 auto;
        padding-bottom: 10px;
    }

    .order-table {
        margin: 0 auto;
        padding-bottom: 100px;
    }
}
</style>
