<template>
  <div>
    <b-modal id="my-modals" hide-header hide-footer>
      <h4>Edit Item</h4>

      <form class="form first-form" enctype="multipart/form-data">
        <div class="form-group row">
          <label for="inputName" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control input-fom" id="inputName" />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Image</label>
          <div class="col-sm-10">
            <b-form-file placeholder="Choose image" class="input-fom"></b-form-file>
          </div>
        </div>

        <div class="form-group row">
          <label for="inputPrice" class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-7">
            <input type="text" class="form-control input-fom" id="inputPrice" />
          </div>
        </div>

        <div class="form-group row">
          <label for="category" class="col-sm-2 col-form-label">Category</label>
          <select class="form-control col-sm-5 ml-3 input-fom">
            <option selected>Category</option>
          </select>
        </div>

        <div class="two-button">
          <div>
            <input type="button" value="Cancel" class="btn btn-cancel-add" @click="$bvModal.hide('my-modals')"/>
          </div>

          <div>
            <input type="submit" value="Update" class="btn btn-add" />
          </div>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {}
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
