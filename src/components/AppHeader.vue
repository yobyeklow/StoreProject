<template>
  <header @click="handleModalClick" class="header">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-around"
      >
        <div class="header-icon d-flex align-items-center col-md-3">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div class="header-logo col-md-6 text-center">
          <router-link to="/">
            <img src="@/assets/img/logo.png" alt="logo" />
          </router-link>
        </div>
        <div class="header-icon col-md-3">
          <router-link to="/login">
            <i class="fa-solid fa-user"></i>
          </router-link>
          <i class="fa-solid fa-basket-shopping"></i>
        </div>
      </div>
    </div>
  </header>

  <div @click="handleModalClick" class="modal_theme" ref="modal_theme"></div>
  <div @click="handleModalClick" class="main_menu" ref="main_menu">
    <div class="content_menu">
      <button class="close_menu" aria-label="Đóng menu" title="Đóng menu">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <ul class="nav_list">
        <li class="list_item">
          <a href="/"> Shoes Store </a>
        </li>
        <li class="list_item">
          <a href="#">Shop</a>
          <ul class="subnav_list" ref="subnav_list">
            <li class="list_item_child">
              <a href="/shop/nike"> Nike </a>
            </li>
            <li class="list_item_child">
              <a href="/shop/nike"> Vans </a>
            </li>
            <li class="list_item_child">
              <a href="/shop/balance"> New Balance </a>
            </li>
          </ul>
        </li>
        <li class="list_item">
          <a href="#">Account</a>
        </li>
      </ul>
    </div>
  </div>
  <div @click="handleModalClick" class="bag_sidebar" ref="bag_sidebar">
    <div class="bag_content">
      <div class="bag_heading clearfix">
        <h4>Giỏ hàng</h4>
        <div
          class="bag_btn_close d-flex justify-content-center"
          title="Đóng giỏ hàng"
        >
          <button class="close_menu" aria-label="Đóng menu" title="Đóng menu">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div class="bag_body clearfix">
        <table  v-for="item in cart" :key="item._id" id="bag_view">
          <tbody>
            <tr class="bag_product">
              <td class="product_image">
                <img
                  :src="`http://localhost:3000/${item.img}`"
                  alt=""
                />
              </td>
              <td class="product_details">
                <span class="product_name">{{item.name}}</span>
                <span class='product_quantity'>{{item.quantity}}</span>
                <span class="product_price">{{item.price}}</span>
                <span
                  @click="removeItemInCart(item)"
                  class="btn_delete"
                  title="Bỏ sản phẩm"
                  >Bỏ sản phẩm</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bag_footer">
        <div class="clearfix">
          <div class="d-flex justify-content-between px-3 py-3">
            <span class="text-left">Tổng tiền:</span>
            <div class="total_price text-right">
              <span>{{totalPrice}}</span>
            </div>
          </div>
          <div class="bag_btn_checkout">
            <button class="btn" title="Thanh toán">Thanh toán</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartService from "../services/cart.service";

export default {
  
  data() {
    return {
      turnOn: "false",
      activeCart: -1,
      cart: [],
      totalPrice:'',  
      product:{},
      timer: "",
    };
  },
  created(){
      // Auto Reload Page;
      this.getItems();
      // this.timer = setInterval(this.getItems, 5000);  
    },
  
  methods: {
    handleModalClick(e) {
      // console.log(e.path[0])
      if (e.path[0].className == "fa-solid fa-bars") {
        this.$refs.main_menu.classList.add("active");
        this.$refs.modal_theme.classList.add("active");
      }
      if (e.path[0].className == "fa-solid fa-basket-shopping") {
        this.$refs.bag_sidebar.classList.add("active-modal");
        this.$refs.modal_theme.classList.add("active-modal");
      }
      if (
        e.path[0].className == "fa-solid fa-xmark" ||
        e.path[0].className == "close-menu" ||
        e.path[0].className == "modal_theme active" ||
        e.path[0].className == "modal_theme active-modal"
      ) {
        console.log(e.path[0].className);
        if (this.$refs.main_menu.className == "main_menu active") {
          this.$refs.main_menu.classList.remove("active");
          this.$refs.modal_theme.classList.remove("active");
        } else {
          this.$refs.bag_sidebar.classList.remove("active-modal");
          this.$refs.modal_theme.classList.remove("active-modal");
        }
      }
      if (
        e.path[0].className == "fa-solid fa-basket-shopping" ||
        e.path[0].className == "close-menu" ||
        e.path[0].className == "modal_theme active"
      ) {
        this.$refs.bag_sidebar.classList.remove("active");
        this.$refs.modal_theme.classList.remove("active");
      }
      if (e.path[0].textContent === "Shop" && this.turnOn == "false") {
        this.turnOn = "true";
        this.$refs.subnav_list.style.display = "block";
        e.preventDefault();
      } else if(e.path[0].textContent === "Shop" && this.turnOn == "true") {
        this.turnOn = "false";
        this.$refs.subnav_list.style.display = "none";
        e.preventDefault();
      }
    },
    async removeItemInCart(data){
      this.product = data;
      await CartService.removeItem(this.product);
    },
    cancelAutoUpdate() {  
      clearInterval(this.timer);  
    },
      async getItems(){
      const result = await CartService.getItemsCart();
      this.cart = result.item;
      this.cart.map((element)=>{
        element.price = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.price);
      })
      this.totalPrice = result.price;
      this.totalPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.totalPrice);
    },
  },

   beforeDestroy() {  
    this.cancelAutoUpdate();  
  },  
  
};
</script>
<style scope>
@import "@/assets/css/form.css";

.header-icon i {
  font-weight: 20px;
}
.modal_theme {
  position: fixed;
  opacity: 0.5;
  width: 100%;
  left: 0;
  top: 0 !important;
  right: 0;
  bottom: 0;
  background-color: #363636;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}
.main_menu,
.bag_sidebar {
  height: 100vh;
  overflow-y: auto;
  width: 220px;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999999 !important;
  top: 0 !important;
  left: 0;
  transform: translateX(-100%);
  visibility: hidden;
  transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
    visibility 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: none;
  touch-action: manipulation;
}
.bag_sidebar {
  right: 0;
  left: auto;
  width: 300px;
  opacity: 0;
  transition: opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s;
  transform: translateX(80px);
  height: 100%;
}
.bag_heading {
  padding: 15px 15px;
}
.bag_heading h4 {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
}
.main_menu .content_menu {
  transition: opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s;
  height: 100%;
  overflow: auto;
  padding: 10px 0;
  position: relative;
}
.content_menu button,
.bag_heading button {
  position: absolute;
  margin-left: 0;
  right: 10px;
  top: 3px;
  line-height: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  -webkit-appearance: button;
  cursor: pointer;
  border-radius: 0;
  z-index: 999;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
}
.bag_heading button {
  top: 15px;
  font-size: 1.4rem;
  right: 14px;
  font-weight: 600;
}
.bag_body {
  height: calc(100vh - 250px);
  padding: 15px;
}
.bag_footer {
  border-top: 1px dashed black;
}
.bag_btn_checkout {
  padding: 20px 10px;
}
.bag_btn_checkout .btn {
  display: block;
  width: 100%;
  background-color: aquamarine;
  color: white;
}
.content_menu button i {
  font-size: 1.2rem;
  color: #897e7e;
}
.content_menu button:hover,
.bag_heading button:hover {
  transform: translate(0%, 0%) rotate(360deg);
}
.nav_list {
  padding: 0 10px;
  display: block;
}
.nav_list ul {
  list-style: none;
}
.nav_list li a {
  text-decoration: none;
  color: black;
}

.subnav_list {
  padding-left: 0px;
  padding-right: 0px;
  display: none;
  width: 100%;
}
.list_item a {
  padding: 10px 7.5px;
  padding-right: 25px;
  text-decoration: none;
  display: block;
  border-bottom: 1px solid black;
  text-transform: uppercase;
  position: relative;
  font-size: 13px;
  font-weight: 500;
}
.subnav_list a {
  position: relative;
  display: block;
  padding-left: 25px;
}
.modal_theme.active,
.modal_theme.active-modal {
  visibility: visible;
  opacity: 0.5;
}
.main_menu.active,
.bag_sidebar.active-modal {
  visibility: visible;
  transform: translateX(0);
}
.bag_sidebar.active-modal {
  opacity: 1;
}
.subnav_list.block_scope {
  display: block;
}
.product_details {
  display: block;
}
#bag_view .product_image {
  width: 24%;
  vertical-align: top;
  position: relative;
  padding: 10px 10px 10px 0px;
}
#bag_view .product_image img {
  max-width: 100%;
}
.product_name,
.product_price {
  display: block;
}
#bag_view .product_name {
  float: left;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}
#bag_view .product_price {
  text-align: center;
  float: left;
  line-height: 26px;
  font-weight: 600;
  opacity: 0.7;
  display: block;
}
#bag_view .product_quantity {
  float: left;
  width: auto;
  background: #ededed;
  text-align: center;
  padding: 6px 10px;
  font-size: 12px;
  line-height: 1;
  margin-right: 12px;
}
#bag_view .btn_delete {
  font-size: 12px;
  float: left;
  width: 100%;
  margin: 5px 0 12px;
  text-transform: uppercase;
  color: #72ded9;
}
#bag_view .btn_delete:hover {
  cursor: pointer;
  color: red;
  text-decoration: underline;
}
</style>
