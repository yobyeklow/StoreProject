<template>
    <div id='register'>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="register_title">
                        <h3>Tạo tài khoản</h3>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <form action="" class="register_form">
                        <div class="register-container">
                            <div class="form-item">
                                <span>Họ tên:</span>
                            <input type="text" name="Name" id="username">
                            </div>
                            <div class="form-item">
                                <span>Email:</span>
                                <input type="email" name="email" id="email">
                            </div>
                            <div class="form-item">
                                <span>Mật khẩu:</span>
                                <input type="password" name="password" id="password">
                            </div>
                            <div class="form-item">
                                <span>SĐT:</span>
                                <input type="text" name="phone" id="phone">
                            </div>
                            <div class="form-item">
                                <button class="btn">
                                    Đăng ký
                                </button>
                            </div>
                            
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#register{
    height:600px;
    position:relative;
}
.container {
    position:absolute;
    top: 120px;
    right:2px;
}
.register_title{
    height:296px;
    border-right:1px solid black;
}
.row .register_title h3{
    text-transform: uppercase;
    text-align: center;
    position: relative;
    top:100px;
}
.register_form{
    text-align: center;
    background-color: rgba(204, 204, 204, 0.541);
    border-radius: 10px;
    width:400px;
    margin-left:20px;
}

.form-item{
    padding:15px 0px;
}
.form-item:last-child{
   padding-top:0px;
}
.form-item input{
    margin-left:10px;
}
.btn{
    color:white;
    padding:10px 10px;
    align-items: center;
    background-color: blue;
}
</style>