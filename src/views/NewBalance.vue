<template>
  <section class="section">
    <img src="@/assets/img/niketheme.jpg" alt="niketheme.jpg" />
  </section>
  <div id="nikeProduct">
    <div class="container">
      <div class="row">
        <div class="main_container col-md-12 col-lg-12 py-3">
          <h3 class="text-center title_product">Nike Product</h3>
          <div class="category_product">
            <div class="product_list row">
              <div
                v-for="(item, index) in items"
                :key="item._id"
                class="col-6 col-sm-4 col-md-4 col-lg-4"
              >
                <div class="product_item">
                  <div class="box_image mb-2">
                    <img
                      :src="`http://localhost:3000/${item.image}`"
                      alt="Nike shoes"
                    />
                  </div>
                  <div class="box_details text-center">
                    <div class="price_item">
                      <span class="price">{{ item.price }}</span>
                    </div>
                    <div class="name_item">
                      <span class="name_item">{{ item.name }}</span>
                    </div>
                    <div class="btn_buy_item">
                      <button
                        type="submit"
                        class="btn btn-lg"
                        v-on:click="addItemToCart(items[index])"
                      >
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import ProductService from "../services/product.service";
import CartService from "../services/cart.service";
export default {
  data() {
    return {
      item: {
        cartItems:{
            product:{},
            quantity:0,
        },
      },
      
      items: [],
      count: 0,
      activeIndex: -1,
    };
  },

  methods: {
    async addItemToCart(data) {
      try {
        
        this.item.cartItems.product = data;
        this.item.cartItems.quantity++;
        await CartService.addItem(this.item);
        this.item.cartItems.quantity=0;
      } catch (err) {
        console.log(err);
      }
    },
    async retrieveProducts() {
      try {
        this.items = await ProductService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.retrieveProducts();
  },
};
</script>
<style scoped>
.main_container {
  padding-top: 2;
}
.main_container .title_product {
  text-transform: uppercase;
  padding-bottom: 15px;
}
.product_item {
  margin-bottom: 20px;
  cursor: pointer;
}
.product_item:hover .name_item {
  color: aquamarine;
}
.box_image {
  display: block;
  position: relative;
}
.box_image img {
  width: 100%;
  max-width: 350px;
  max-height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.price_item {
  font-weight: 700;
}
.name_item {
  margin-bottom: 10px;
  text-transform: uppercase;
}
.btn_buy_item {
  box-sizing: border-box;
}
.btn {
  padding: 10px;
  width: auto;
  font-size: 14px;
  background-color: #9e9e9e;
  color: white;
}
.btn_buy_item .btn:hover {
  background-color: aquamarine;
  color: white;
}
</style>
