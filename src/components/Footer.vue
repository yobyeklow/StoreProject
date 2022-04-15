<template>
    <div id="footer">
        <div class="container">
            <div class="row">
                <div class="col-xs-11 col-sm-13 col-md-12 col-lg wrapbox-content d-flex flex-wrap justify-content-center">
                    <div class="footer-logo">
                        <img src="@/assets/img/logo.png" alt="logo.png">
                    </div>
                    <div class="footer-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam id odit facere, ipsa atque veritatis.
                            A rem neque quia est blanditiis veniam tempora sit doloremque assumenda perferendis, reprehenderit molestias!
                        </p>
                        
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg wrapbox-address">
                    <div class="contact ">
                        <div class="footer-title">
                            <h4>ShoesStore - Offical</h4>
                        </div>
                        <div class="footer-address">
                            <ul >
                                <li>
                                    <i class="fa-brands fa-instagram mr-10"></i>
                                    <span>Instagram:Comming Soon...</span>
                                </li>
                                <li>
                                    <i class="fa-brands fa-facebook-f"> </i>
                                    <span>
                                            Facebook:Comming Soon...
                                    </span>
                                </li>
                            </ul>
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
<style scoped>
#footer{
    background:rgba(204, 204, 204, 0.466);
    height: auto;
}
.cointainer .row{
    position:relative;
}
.contact{
    position:absolute;
    left:0;
    top:0;
    transform: translateX(50%) translateY(50%);
}

.footer-logo img{
    max-width: 100%;
}
.footer-content,.footer-address{
    max-width:100%;
}
.footer-content p{
    text-align:justify;
    line-height: 1.5rem;
    padding:0 10px;
    white-space: normal;
    overflow: hidden;
}
.footer-title h4{
    text-transform: uppercase;
}
.footer-address ul{
    list-style: none;
    padding:0;
}
.footer-address ul i{
    margin-right: 5px;
}
@media (max-width: 576px) {
    .contact{
        transform: translateX(25%) translateY(50%);
    }
   
 }
</style>