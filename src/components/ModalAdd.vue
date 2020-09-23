<template>
  <div>
    <b-modal id="my-modal" hide-header hide-footer>
      <h4>Add Item</h4>

      <form class="form first-form" @submit="uploadData" enctype="multipart/form-data">
        <div class="form-group row">
          <label for="inputName" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control input-fom" id="inputName" v-model="name" />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Image</label>
          <div class="col-sm-10">
            <b-form-file
              placeholder="Choose image"
              class="input-fom"
              @change="onProcessFile($event)"
            ></b-form-file>
          </div>
        </div>

        <div class="form-group row">
          <label for="inputPrice" class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-7">
            <input type="text" class="form-control input-fom" id="inputPrice" v-model="price" />
          </div>
        </div>

        <div class="form-group row">
          <label for="category" class="col-sm-2 col-form-label">Category</label>
          <select class="form-control col-sm-5 ml-3 mr-1 input-fom" v-model="id_category">
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
            <input type="button" value="Cancel" class="btn btn-cancel-add" @click="$bvModal.hide('my-modal')"/>
          </div>

          <div>
            <input type="submit" value="Add" class="btn btn-add" />
          </div>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      name: null,
      image: null,
      price: null,
      id_category: null
    }
  },
  computed: {
    ...mapGetters({
      allCtg: 'ctg/getterCtg'
    })
  },
  methods: {
    ...mapActions({
      getCategory: 'ctg/getAllCtg',
      actionUpload: 'products/addProduct'
    }),
    onProcessFile (event) {
      this.image = event.target.files[0]
    },
    uploadData () {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('picture', this.image)
      formData.append('price', this.price)
      formData.append('id_category', this.id_category)

      this.actionUpload(formData).then((response) => {
        alert(response)
      })
    }
  },
  mounted () {
    this.getCategory()
  }
}
</script>

<style scoped>
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
</style>
