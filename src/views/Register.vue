<template>
    <div id='register'>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-lg wrapbox_heading">
                    <div class="header_page">
                        <h3>Tạo tài khoản</h3>
                    </div>
                </div>
                <div class="col-md-12 col-lg wrapbox_content">
                    <div class="form_account">
                        <form @submit.prevent="CreateAccount" method="POST" accept-charset="UTF-8" :validation-schema="registerFormSchema">
                            <div class="name clearfix large_form">
                                <input name="name" type="text" placeholder="Họ tên" id="name" v-model='user.name'>
                                <ErrorMessage name="name" class="error-feedback" />
                            </div>
                            <div class="email clearfix large_form">
                                <input name="email" type="email" placeholder="Email" id="email" v-model="user.email">
                                <ErrorMessage name="email" class="error-feedback" />
                            </div>
                            <div class="password clearfix large_form">
                                <input name="password" type="password" placeholder="Mật khẩu" id="password" v-model='user.password'>
                                <ErrorMessage name="password" class="error-feedback" />
                            </div>
                            <div class="phone clearfix large_form">
                                <input name="phone" type="text" placeholder="Điện thoại" id="phone" v-model='user.phone'>
                                <ErrorMessage name="phone" class="error-feedback" />
                            </div>
                            <p>{{message}}</p>
                            <div class="register_btn clearfix dark">
                                <button class="btn">Đăng ký</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ContactService from '../services/contact.service';
import * as yup from "yup";
import {  ErrorMessage } from "vee-validate";
export default {
    name:'Register',
    data(){
        const registerFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 3 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự.")
                .required("Email không được bỏ trống"),
            password: yup
                .string()
                .max(32, "Mật khẩu tối đa 32 ký tự.")
                .min(8,"Mật khẩu tối thiểu phải có 8 ký tự")
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    "Mật khẩu nên chứa tối thiểu 8 ký tự, có ít nhất 1 ký tự in hoa,1 ký tự thường và 1 chữ số"
            ),
            phone: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
        });
        return{
            user:{
                name:'',
                password:'',
                phone:'',
                email:'',
            },
            message:"",
        }
    },
    methods:{
        async CreateAccount() {
                try{
                    await ContactService.create(this.user);
                    this.message = "Tài khoản đã được tạo thành công.";
                }
                catch(data){
                    console.log(data);
                }
            },
    },
    components: {
        ErrorMessage,
    },
}
</script>
<style scoped>
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
    padding: 120px 60px;
}
.large_form{
    margin-bottom: 30px;
}
.form_account input[type='text'],
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