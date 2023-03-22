<template>
    <div id="footer">
        <div id="content">
            <p>© 2023 Amadeus Hospitality. All rights reserved. Amadeus is the owner or the licensee of this website and all content. The website and content are protected by copyright and other intellectual property laws, treaties, and registrations globally.</p>
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