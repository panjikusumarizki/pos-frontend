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
        </div>

        <div id="bottom-menu">
            <div id="bottom-menu-content">
              <div id="fork-bottom">
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
          </div>

        <div class="col-md-7 center-content">
          <div class="row" id="sorting">
            <input type="text" class="mb-4 search-bar" placeholder="Product name..." v-model="names" @keyup="search"/>
            <div>
              <b-dropdown
                id="dropdown-right"
                variant="outline-secondary"
                right
                text="Sort by"
                class="btn-ctg mr-3"
              >
                <b-dropdown-item @click="sort('name')">Product Name</b-dropdown-item>
                <b-dropdown-item @click="sort('category_name')">Category</b-dropdown-item>
                <b-dropdown-item @click="sort('price')">Price</b-dropdown-item>
                <b-dropdown-item @click="sortTypes('desc')">Newest Product</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>

          <div class="row">
            <div class="col-6 col-sm-4 col-md-4 col-lg-4 food-card" v-for="(item, index) in allProduct.data" :key="index">
                  <img :src="`http://localhost:3001/${item.picture}`" class="img-fluid"/>

                  <p id="name">{{item.name}}</p>

                  <h4 id="price">Rp. {{item.price}}</h4>

                  <div class="d-flex mb-5" id="bt-card">
                    <b-button variant="primary" v-b-modal.my-modals @click="getdetail(item.id, index)">
                      <b-icon icon="pencil-square"></b-icon>
                    </b-button>

                    <b-button variant="success">
                      <b-icon icon="cart4"></b-icon>
                    </b-button>

                    <b-button variant="danger" @click="deleted(item.id)">
                      <b-icon icon="x"></b-icon>
                    </b-button>
                  </div>
            </div>

            <b-modal id="my-modals" hide-header hide-footer>
              <h4>Edit Item</h4>

              <form class="form first-form" @submit="updateProduct" enctype="multipart/form-data">
                <div class="form-group row">
                  <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control input-fom" id="inputName" v-model="input.nameDetail">
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Image</label>
                  <div class="col-sm-10">
                    <b-form-file
                    placeholder="Choose image"
                    class="input-fom"
                    @change="processFile($event)"
                    ></b-form-file>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputPrice" class="col-sm-2 col-form-label">Price</label>
                  <div class="col-sm-7">
                    <input type="text" class="form-control input-fom" id="inputPrice" v-model="input.priceDetail">
                  </div>
                </div>

                <div class="form-group row">
                  <label for="category" class="col-sm-2 col-form-label">Category</label>
                  <select class="form-control col-sm-5 ml-3 input-fom" v-model="input.id_category">
                    <option selected :value="null">Category</option>
                    <option
                      v-for="(item, index) in allCtg.data"
                      :key="index"
                      :value="item.id"
                    >{{item.category_name}}</option>
                  </select>
                </div>

                <div class="two-button">
                  <div>
                    <input type="button" value="Cancel" class="btn btn-cancel-add" @click="$bvModal.hide('my-modals')">
                  </div>

                  <div>
                    <input type="submit" value="Update" class="btn btn-add">
                  </div>
                </div>
              </form>
            </b-modal>
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
              <img src="../assets/img/blackforest.png" class="img-fluid" />
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
      <Modaladd/>
      <!-- <Modaledit/> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Modaladd from '../components/ModalAdd'
// import Modaledit from '../components/ModalEdit'

export default {
  components: {
    Modaladd
    // Modaledit
  },
  data () {
    return {
      names: '',
      sortParam: '',
      type: '',
      ids: '',
      idDetail: null,
      input: {
        nameDetail: null,
        priceDetail: null,
        imageDetail: null,
        id_category: null,
        idUpd: null
      }
    }
  },
  computed: {
    ...mapGetters({
      allProduct: 'products/getterProduct',
      allDetail: 'products/getterDetail',
      allCtg: 'ctg/getterCtg'
    })
  },
  methods: {
    ...mapActions({
      getProduct: 'products/getAllProduct',
      sortProduct: 'products/sortBy',
      sortTypeProduct: 'products/sortType',
      deleteProduct: 'products/deleteProduct',
      detailProduct: 'products/getDetails',
      updatedProduct: 'products/updateProduct',
      getCategory: 'ctg/getAllCtg'
    }),
    search () {
      this.getProduct(this.names).then((response) => {
        this.allProduct.data = response.data.data
      }).catch((err) => {
        alert(err)
      })
    },
    sort (param) {
      this.sortParam = param
      this.sortProduct(param).then((response) => {
        this.getProduct = response.data.data
      }).catch((err) => {
        alert(err)
      })
    },
    sortTypes (params) {
      this.type = params
      this.sortTypeProduct(params).then((response) => {
        this.sortProduct = response.data.data
      }).catch((err) => {
        alert(err)
      })
    },
    deleted (ids) {
      this.deleteProduct(ids).then((response) => {
        alert(response)
        location.reload()
      }).catch((err) => {
        alert(err)
      })
    },
    getdetail (id, index) {
      this.idDetail = id
      this.input.idUpd = id
      this.detailProduct(this.idDetail).then((response) => {
        this.input.nameDetail = response[0].name
        this.input.priceDetail = response[0].price
      }).catch((err) => {
        console.log(err)
      })
    },
    processFile (event) {
      this.imageDetail = event.target.files[0]
    },
    updateProduct () {
      this.input.imageDetail = this.imageDetail

      this.updatedProduct(this.input).then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getProduct('')
    this.getCategory()
  }
}
</script>

<style scoped>
.search-bar {
  height: 35px;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  border-color: #6c757d;
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

#bt-card {
  justify-content: space-evenly;
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

.first-form {
    margin-top: 50px;
}

.two-button {
    display: flex;
    justify-content: flex-end;
    padding-top: 50px;
}

.btn-cancel-add {
    width: 120px;
    font-size: 20px;
    color: #fff;
    background: #F24F8A;
    border-radius: 10px;
    margin-right: 10px;
}

.btn-add {
    width: 120px;
    font-size: 20px;
    color: #fff;
    background: #57CAD5;
    border-radius: 10px;
}

.input-fom {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.add {
    cursor: pointer;
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

    .name {
        font-size: 13px;
    }

    .price {
        font-size: 15px;
    }

    .right-content {
        padding-bottom: 60px;
        padding-top: 5px;
    }
}
</style>
