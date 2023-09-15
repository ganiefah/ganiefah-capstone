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
            </div>
            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED TO SONIC VINYLS</div>
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


.form-control,
textarea {
    
    background-color: rgb(185, 185, 185);
    letter-spacing: 1px;
    padding: 1rem;
}

.send-button {
    margin-top: 15px;
    height: 50px;
    width: 100%;
    overflow: hidden;
    background-color: rgb(185, 185, 185);
    color: black;
}



.send-text {
    display: block;
    margin-top: 10px;
    letter-spacing: 2px;
}

i {
    color: gold;
}

form{
    width: 100%;
}



.copyright {
    color: #555;
    letter-spacing: 1px;
    text-align: center;
    
}


@media screen and (max-width: 850px) {
    .contact-wrapper {
        display: flex;
        flex-direction: column;
    }

    .btn{
        width: 100%;
    }
}

@media screen and (max-width: 569px) {

   

    .form-control,
    textarea {

        margin: 0 auto;
    }

}

@media screen and (max-width: 410px) {
    .send-button {
        width: 99%;
    }
}</style>