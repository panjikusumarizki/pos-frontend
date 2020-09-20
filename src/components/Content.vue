<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-1 left-content" id="side-menu">
          <div id="left-menu">
            <div id="fork">
              <img src="../assets/img/fork.png" />
            </div>
            <router-link to="/history">
              <div id="clipboard">
                <img src="../assets/img/clipboard.png" />
              </div>
            </router-link>
            <div id="add" v-b-modal.my-modal>
              <img src="../assets/img/add.png" />
            </div>
          </div>

          <div id="bottom-menu">
            <div id="bottom-menu-content">
              <div id="fork-bottom">
                <img src="../assets/img/fork.png" />
              </div>
              <div id="clipboard-bottom">
                <img src="../assets/img/clipboard.png" />
              </div>
              <div id="add-bottom">
                <img src="../assets/img/add.png" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-7 center-content">
          <div class="row" id="sorting">
            <input type="text" class="mb-4" placeholder="Product name..." />
            <div>
              <b-dropdown
                id="dropdown-right"
                variant="outline-secondary"
                right
                text="Sort by"
                class="btn-ctg"
              >
                <b-dropdown-item>Sort by Product Name</b-dropdown-item>
                <b-dropdown-item>Sort by Category</b-dropdown-item>
                <b-dropdown-item>Sort by Newest</b-dropdown-item>
                <b-dropdown-item>Sort by Lowest Price</b-dropdown-item>
                <b-dropdown-item>Sort by Highest Price</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>

          <div class="row">
            <div class="col-6 col-sm-4 col-md-4 col-lg-4 food-card">
              <Card/>
            </div>

            <div class="col-6 col-sm-4 col-md-4 col-lg-4 food-card">
              <Card/>
            </div>

            <div class="col-6 col-sm-4 col-md-4 col-lg-4 food-card">
              <Card/>
            </div>
          </div>
        </div>

        <div class="col-md-4 right-content">
          <div id="cart-list">
            <div>
              <img src="../assets/img/empty.png" />
            </div>
            <div>
              <h5>Your cart is empty</h5>
            </div>
            <div>
              <p>Please add some item from the menu</p>
            </div>
          </div>

          <div class="cart-list-select">
            <div class="cart-select">
              <img src="../assets/img/cappucino.png" class="img-fluid" />
              <div class="side">
                <h4>Salmon truffle teriyaki teriyaki</h4>
                <div class="btn-qty">
                  <div class="button">
                    <p>-</p>
                  </div>
                  <div class="button number">1</div>
                  <div class="button">+</div>
                </div>
              </div>
              <div class="price-item text-right">Rp. 15.000</div>
            </div>

            <table class="total">
              <tr>
                <th width="60%" class="total-title">Total :</th>
                <td class="price-total text-right">Rp. 105.000</td>
              </tr>
            </table>

            <div class="tax">*Belum termasuk ppn</div>

            <div>
              <button class="btn btn-block btn-checkout py-3">Checkout</button>
            </div>

            <div>
              <button class="btn btn-block btn-cancel mt-3 py-3 mb-2">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Productview'

export default {
  components: {
    Card
  }
}
</script>

<style>
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

.center-content {
  padding-top: 20px;
  justify-content: space-between;
  background-color: rgba(190, 195, 202, 0.3);
}

#name {
  margin-bottom: 0;
}

#sorting {
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
}

.food-card img {
  width: 233px;
}

.right-content {
  padding-top: 20px;
  border: 1px solid #cecece;
}

#cart-list img {
  width: 150px;
  height: 150px;
}

#cart-list {
  text-align: center;
  padding: 0;
  display: block;
}

#cart-list p {
  font-size: 13px;
  color: #cecece;
}

.cart-list-select {
    display: none;
}

.cart-select {
    display: flex;
    padding-bottom: 37px;
}

.cart-select img {
    width: 100px;
    height: 100px;
}

.cart-select h4 {
    font-size: 20px;
}

.side {
    padding-left: 10px;
    width: 100px;
}

.side h4 {
    position: absolute;
}

.btn-qty {
    display: flex;
    padding-top: 75px;
    position: relative;
}

.button {
    width: 25px;
    height: 25px;
    text-align: center;
    justify-content: center;
    font-size: 20px;
    color: #82de3a;
    background: rgba(130, 22, 58, 0.2);
    border: 1px solid #82de3a;
}

.number {
    background: #fff;
}

.price-item {
    margin-top: 70px;
    font-size: 20px;
    margin-left: 83px;
}

.total {
    margin-top: 350px;
    font-size: 20px;
}

.text-right {
    padding-left: 30px;
}

.tax {
    font-size: 15px;
    font-weight: 50;
    padding-bottom: 0;
    padding-top: 10px;
}

.btn-checkout {
    font-size: 20px !important;
    color: #fff !important;
    background: #57cad5 !important;
}

.btn-cancel {
    font-size: 20px !important;
    color: #fff !important;
    background: #f24f8a !important;
}

.price-total {
    padding-left: 55px;
}
</style>
