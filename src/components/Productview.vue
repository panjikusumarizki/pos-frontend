<template>
  <div>
    <div id="food-content">
      <img fluid src="../assets/img/blackforest.png" id="img-card" />

      <p id="name">Blackforest</p>

      <h4 id="price">Rp. 15.000</h4>

      <div class="d-flex mb-3" id="bt-card">
        <b-button variant="primary" v-b-modal.my-modals>
          <b-icon icon="pencil-square"></b-icon>
        </b-button>

        <b-button variant="success">
          <b-icon icon="cart4"></b-icon>
        </b-button>

        <b-button variant="danger">
          <b-icon icon="x"></b-icon>
        </b-button>
      </div>
    </div>
  </div>
</template>

<style>
.food-content img {
  width: 233px;
}

#bt-card {
  justify-content: space-evenly;
}
</style>
