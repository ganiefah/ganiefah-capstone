<template>
    <div class="con">
        <section id="contact">
            <h1 class="section-header">Contact Us</h1>
            <div class="contact-wrapper">
                <form action="https://formspree.io/f/mzbqoqkr" method="POST">
                    <div class="form-group">
                        <div class="col-sm-12 waa">
                            <input type="text" class="form-control" id="name" placeholder="Enter Your Full Name" name="name"
                                value="" oninvalid="this.setCustomValidity('Please Enter Your Full Name')"
                                oninput="this.setCustomValidity('')" required>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-12 waa">
                            <input type="email" class="form-control" id="email" placeholder="Enter Your Email" name="name"
                                value="" oninvalid="this.setCustomValidity('Please Enter Your Email')"
                                oninput="this.setCustomValidity('')" required>
                        </div>
                    </div>


                    <textarea class="form-control waa" rows="10" placeholder="Please Provide Feedback" name="name"
                        oninvalid="this.setCustomValidity('Please Enter Feedback Or A Query')"
                        oninput="this.setCustomValidity('')" required></textarea>

                    <button class="btn send-button" id="submit" type="submit" value="SEND">
                        <div class="alt-send-button">
                            <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                        </div>

                    </button>

                </form>


                <div class="direct-contact-container">
                    <ul class="contact-list">
                        <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">47 Toner
                                    Road, Cape Town</span></i></li>

                        <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a
                                        href="tel:021 970 1470" title="Give Us A Call">Telephone Number</a></span></i></li>

                        <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a
                                        href="mailto:ganiefahmajiet3@gmail.com" title="Send Us An Email">Our Email
                                        Address</a></span></i></li>

                    </ul>
                        <ul class="social-media-list">
                            <li><a href="https://www.facebook.com/pottersworkCT/" target="_blank"><i class="bi bi-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/potterswork/" target="_blank"><i class="bi bi-instagram"></i></a></li>
                            <li><a href="https://twitter.com/LaiquahC" target="_blank"><i class="bi bi-twitter"></i></a> <br></li>
                        </ul>
                    <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED TO SONIC VINYLS</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.waa {
    margin-bottom: 0.5rem;
}

#contact {
    margin: 0;
    padding: 0;
    background-color: white;
    padding-bottom: 100px;
}

#contact {
    width: 100%;
    height: 100%;
}

.section-header {
    text-align: center;
    margin: 0 auto;
    padding: 40px 0;
    text-transform: uppercase;
    letter-spacing: 6px;
}

.contact-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    max-width: 840px;
}

.form-horizontal {
    max-width: 400px;
    font-weight: 400;
}

.form-control,
textarea {
    max-width: 400px;
    background-color: rgb(185, 185, 185);
    letter-spacing: 1px;
    padding: 1rem;
}

.send-button {
    margin-top: 15px;
    height: 50px;
    width: 400px;
    overflow: hidden;
    background-color:  rgb(185, 185, 185);
    color: black;
}



.send-text {
    display: block;
    margin-top: 10px;
    letter-spacing: 2px;
}

.direct-contact-container {
    max-width: 400px;
}


.contact-list {
    list-style-type: none;
    padding-right: 20px;
}

.list-item {
    line-height: 4;
    color: #aaa;
}

.contact-text {
    letter-spacing: 1.9px;
    color: black;
}

.place {
    margin-left: 62px;
}

.phone {
    margin-left: 56px;
}


.gmail {
    margin-left: 53px;
}

.contact-text a {
    text-decoration: none;
    transition-duration: 0.2s;
    color: black !important;
}

.contact-text a:hover {
    color: gold !important;
    text-decoration: none;
}

.social-media-list {
    position: relative;
    font-size: 22px;
    text-align: center;
    width: 100%;
    margin: 0;
    padding: 0;
}



.social-media-list li {
    position: relative;
    display: inline-block;
    height: 50px;
    width: 50px;
    margin: 0 0 1rem 1rem;
    line-height: 60px;
    border-radius: 20%;
    color: #fff !important;
    cursor: pointer;
    transition: all .2s ease-in-out;
}

.social-media-list li:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    line-height: 60px;
    border-radius: 20%;
    opacity: 0;
    transition: all .2s ease-in-out;
    
}

i{
    color: gold;
}



.social-media-list li:hover:after {
    opacity: 1;
    transform: scale(1.12);
    transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
}

.social-media-list li:hover a {
    color: #000;
}

.facebook {
    width: 3rem;
}

.twitter {
    width: 3rem;
}

.instagram {
    width: 3rem;
}

.copyright {
    color: #555;
    letter-spacing: 1px;
    text-align: center;
    margin-left: 3rem;
}


/* Begin Media Queries*/
@media screen and (max-width: 850px) {
    .contact-wrapper {
        display: flex;
        flex-direction: column;
    }

    .direct-contact-container,
    .form-horizontal {
        margin: 0 auto;
    }

    .direct-contact-container {
        margin-top: 60px;
        max-width: 300px;
    }

    .social-media-list li {
        height: 60px;
        width: 60px;
        line-height: 60px;
    }

    .social-media-list li:after {
        width: 60px;
        height: 60px;
        line-height: 60px;
    }
}

@media screen and (max-width: 569px) {

    .direct-contact-container,
    .form-wrapper {
        float: none;
        margin: 0 auto;
    }

    .form-control,
    textarea {

        margin: 0 auto;
    }


    .name,
    .email,
    textarea {
        width: 280px;
    }

    .direct-contact-container {
        margin-top: 60px;
        max-width: 280px;
    }

    .social-media-list {
        left: 0;
    }

    .social-media-list li {
        height: 55px;
        width: 55px;
        line-height: 55px;
        font-size: 2rem;
    }

    .social-media-list li:after {
        width: 55px;
        height: 55px;
        line-height: 55px;
    }

}

@media screen and (max-width: 410px) {
    .send-button {
        width: 99%;
    }
}</style>