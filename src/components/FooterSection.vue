<template>
    <div id="footer">
        <div id="background">
            <img class="image" src="../assets/city4.png" alt="">
        </div>
        <div id="content">
            <img class="logo" src="../assets/tclogo.png" alt="">
            <p>Contact your TravelClick representative at <a href="tel:+1 866-674-4553">+1 866-674-4553</a> or <a href="mailto:info@travelclick.com">info@travelclick.com</a></p>
            <a href="https://www.travelclick.com/">www.travelclick.com</a>
            <p>
                We are all about maximizing revenue for hotels. Our data-driven solutions enable over 25,000 customers <br>
                around the globe to know, acquire, convert and retain guests.
            </p>
            <p> 2019 TravelClick.“TravelClick” and all related logos and marks are owned by and/or are registered trademarks of TravelClick, Inc.</p>
            <img src="../assets/google-partner.png" alt="">
            <p><a href="#">Terms and Conditions</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterSection"
    }
</script>

<style scoped>
    #footer {
        position: relative;
        margin: 1em 9em;
    }

    #background {
        position: absolute;
        z-index: -2;
    }

    #background .image {
        opacity: 0.25;
        width: 100%;
    }

    #content {
        text-align: center;
    }

    #content img {
        width: 150px;
    }

    /*
        Responsive Media Queries
    */

    /* iPhone Size */
    @media only screen and (max-width: 375px) {
        #footer {
            margin: 0 2em;
            height: 400px;
        }

        #background {
            position: absolute;
            top: 427px;
            z-index: -2;
        }

        #background .image {
            opacity: 0.25;
            width: 100%;
        }

        #content {
            padding-top: 4em;
            text-align: center;
        }

        #content img {
            width: 150px;
        }
    }

    /* iPad Size */
    @media only screen and (min-width: 376px) and (max-width: 768px) {
        #footer {
            margin: 0 2em;
            height: 400px;
        }

        #background {
            position: absolute;
            top: 273px;
            z-index: -2;
        }

        #background .image {
            opacity: 0.25;
            width: 100%;
        }

        #content {
            padding-top: 6em;
            text-align: center;
        }

        #content img {
            width: 150px;
        }
    }

    /* iPad Pro Size */
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        #footer {
            margin: 0 2em;
            height: 400px;
        }

        #background {
            position: absolute;
            top: 180px;
            z-index: -2;
        }

        #background .image {
            opacity: 0.25;
            width: 100%;
        }

        #content {
            padding-top: 6em;
            text-align: center;
        }

        #content img {
            width: 150px;
        }
    }
</style>