<template>
    <div class="footer">
        <div class="container">
    <div class="row justify-content-center">
        <div class="col-sm-4 col-md-3 item">
            <img src="https://i.postimg.cc/7Ypccvbj/Screenshot-2023-08-27-155311-removebg-preview.png" loading="lazy" alt="logo" class="logo img-fluid">
        </div>
        <div class="col-sm-4 col-md-3 item">
            <h3>Services</h3>
            <br>
            <ul>
                <li><a href="/products">Products</a></li><br>
                <li><a href="/help">Help</a></li><br>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div class="col-sm-4 col-md-3 item">
            <h3>About Us</h3>
            <br>
            <ul>
                <li><a href="/about">Company</a></li><br>
                <li><a href="#">Team</a></li>
            </ul>
        </div>
        <div class="col-sm-4 col-md-3 item">
            <h3>Contact Us</h3>
            <ul>
                <li>Address: <br>
                  47 Toner Street <br>
                  Cape Town <br>
                  7500
                </li><br>
                <li>Phone number: 021 970 1470</li><br>
                <li>Our Email: SonicVinyls@gmail.com</li>
            </ul>
        </div>
        <hr>
        <div class="container-fluid">
          <div class="copyright">
              <p class="copyright">SONIC VINYLS © ALL RIGHTS RESERVED 2023</p>
          </div>
            <div class="footer-social-icon">
                <span>Follow us</span>
                <br>
                <a href="https://www.facebook.com/" id="media" target="_blank"><img src="https://i.postimg.cc/xj6TkVPw/icons8-facebook-50-1.png" loading="lazy" alt="facebook" class="facebook"></a>
                <a href="https://www.instagram.com/"  id="media" target="_blank"><img src="https://i.postimg.cc/TPbpmNPr/icons8-instagram-50-1.png" loading="lazy" alt="instagram" class="instagram"></a>
                <a href="https://twitter.com/" target="_blank" id="media"><img src="https://i.postimg.cc/Qd9tGY1R/icons8-twitter-50-1.png" loading="lazy" alt="twitter" class="twitter"></a> <br>
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
.footer {
    padding:50px 0;
    background-color:black !important;
    color:white !important;
  }

  .footer-social-icon{
    float: right;
  }
  
  #media{
    margin:5px;
  }

  .footer h3 {
    margin-top:0;
    margin-bottom:12px;
    font-weight:bold;
    font-size:16px;
  }
  
  .footer ul {
    padding:0;
    list-style:none;
    line-height:1.6;
    font-size:14px;
    margin-bottom:0;
  }
  .logo{
    width: 20rem;
  }

  .item{
    padding: 1rem;
  }
  
  .footer ul a {
    color: white !important;
    text-decoration:none;
    opacity:0.8;
  }
  
  .footer ul a:hover {
    opacity:1;
    color: gold !important;
  }
  
  .copyright {
    color: white !important;
    display: inline-flex !important;
    justify-content: center !important;
    align-items: center !important;
    text-align: center !important;
    width: 100%;
  }

 .instagram{
    width: 2rem;
 }

 .facebook{
    width: 2rem;
 }

 .twitter{
  width: 2rem;
 }

 
  
</style>