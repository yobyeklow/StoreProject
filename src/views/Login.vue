<template>
    <div id='register'>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="register_title">
                        <h3>Đăng nhập</h3>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <form action="" class="register_form">
                        <div class="register-container">
                            <div class="form-item">
                                <span>Email:</span>
                                <input type="text" name="Name" id="username">
                            </div>
                            <div class="form-item">
                                <span>Mật khẩu:</span>
                                <input type="password" name="password" id="password">
                            </div>
                           
                            <button class="btn form-item">
                                Đăng nhập
                            </button>
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
    padding-bottom: 10px;
}
.form-item input{
    margin-left:10px;
  
}
</style>