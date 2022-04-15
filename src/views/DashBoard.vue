<template>
    <div id="home">
        <div class="content-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="title">
                            <h2>The Product</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="item-shop">
                            <img src="@/assets/img/shoes1.jpg" alt="shoes1.jpg">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="item-shop">
                            <img src="@/assets/img/shoes3.jpg" alt="shoes3.jpg">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="item-shop">
                            <img src="@/assets/img/shoes2.jpg" alt="shoes2.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scope>

.section img{
    height:auto;
    width:100%;
    object-fit: cover;
}
.content-section{
    padding:40px 0px;
}
.title h2{
    text-transform: uppercase;
    position:relative;
    font-weight: 650;
    margin-bottom: 60px;
}
.title h2:before{
    content: "";
    width: 27px;
    height: 27px;
    background: #FFF;
    position: absolute;
    bottom: -32px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 1;
    background-image: url(//bizweb.dktcdn.net/100/404/606/themes/788501/assets/interface.svg?1645081485538);
    background-size: 27px;
}
.title h2:after{
    content: "";
    width: 170px;
    height: 1px;
    background: #CCC;
    position: absolute;
    bottom: -18px;
    left: 0;
    right: 0;
    margin: 0 auto;
}
.item-shop{
    overflow: hidden;
}
.item-shop img{
    max-width: 100%;
    height: auto;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    vertical-align: middle;
    object-fit: cover;
    border-radius: 15px;
}
.item-shop:nth-child(1) img{
    height:525px;
}
.item-shop img:hover{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
}
@media screen {
    
}
</style>