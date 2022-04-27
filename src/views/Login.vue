<template>
   
    <section class="section">
            <img src="@/assets/img/background.png" alt="background.jpg">
    </section>
    <div id='login'>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg wrapbox_heading">
                    <div class="header_page">
                        <h3>Đăng nhập</h3>
                    </div>
                </div>
                <div class="col-md-12 col-lg wrapbox_content">
                    <div class="form_account">
                        <form @submit.prevent="LoginAccount" action="" accept-charset="UTF-8">
                            <p class="text-danger" v-show="activeMessage">{{message}}</p>
                            <div class="last_name clearfix large_form" >
                                <input v-model="user.email" type="email" placeholder="Email" id="email">
                            </div>
                            <div class="first_name clearfix large_form">
                                <input v-model="user.password" type="password" placeholder="Mật khẩu" id="password">
                            </div>
                            <div class="register_btn clearfix justify-content-center">
                                <input  class="btn" type="submit" value="Đăng nhập">
                                <div class="register_pass">
                                    hoặc
                                    <a href="/register">Đăng ký</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue'
import UserService from "../services/user.service";
export default ({
    data(){
        return{
            user:{
                email:'',
                password:'',
            },
            message:'',
            activeMessage:false,
        }
    },
    methods:{
        async LoginAccount(){
            try{
                const result=await UserService.login(this.user)
                if (result.token){
                    this.$router.push({name:'nikeproduct'});
                }
                else{
                    this.message=result.message;
                    this.activeMessage=true;
                }
            }
            catch(err){
                console.log(err);
            }
        }
    },
    
})
</script>

<style scoped>
.section img{
    height:auto;
    width:100%;
    object-fit: cover;
}
.wrapbox_heading{
    display:flex;
    align-items: center;
    justify-content: center;
    height:80vh;
    border-right:1px solid #ccc;
}
.header_page h3{
    font-size: 40px;
    font-weight: 700;
}
.header_page:after{
    content: "";
    background: #000;
    display: block;
    width: 60px;
    height: 4px;
    margin-top: 70px;
}
.wrapbox_content{
    padding: 180px 60px;
}
.large_form{
    margin-bottom: 30px;
}
.form_account input[type='email'],
.form_account input[type='password']{
    width:100%;
    padding:0 20px;
    height: 55px;
    border: 1px solid transparent;
    background: #ccc;
    color:#000
}
.btn{
    background-color: black;
    color:white;
    padding:15px 30px;
    border:1px solid transparent;
}
</style>