<template>
    <div id="case_studies">
        <div id="case_study">
            <div class="title">
                <h2>{{ caseStudies.name}}</h2>
                <div class="line"></div>
            </div>

            <template v-for="(item, index) in caseStudies.cases" >
                <div id="case" v-if="item.show" :key="index" >
                    <div class="content">
                        <h3>{{ item.title }}</h3>
                        <p>
                            {{ item.paragraph_1 }}
                        </p>

                        <p>
                            {{ item.paragraph_2 }}
                        </p>
                    </div>
                    <div class="media">
                        <banner :banner="item.banner" class="banner"></banner>
                    </div>
                </div>
            </template>

            <div id="change_template_buttons">
                <button v-for="(item, index) in caseStudies.cases" :key="index" class="change_template" :class="active(item)"
                        @click="changeTemplate(caseStudies.cases, item)">
                    {{ index + 1 }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from '../components/Banner.vue'

    export default {
        name: "CaseStudies",
        components: {
            Banner
        },
        computed: {
            caseStudies: function () {
                return this.$store.state.caseStudies
            }
        },
        methods: {
            active : function (item) {
                return item.show ? 'active' : ''
            },
            changeTemplate : function (sets, set) {
                let currentSet = sets.filter(function (set) {
                    return set.show === true
                });
                currentSet[0].show = false;

                set.show ? set.show = false : set.show = true;

            }
        },
    }
</script>

<style scoped>
    #case_study {
        position: relative;
    }

    .title h2 {
        color: #005eb8;
        font-family: Amadeus;
        font-size: 36px;
        font-weight: lighter;
    }

    .line {
        background: #005eb8;
        height: 2px;
        position: absolute;
        left: 0;
        top: 40px;
        width: 20px;
    }

    #case {
        align-items: center;
        display: flex;
        flex-direction: row;
    }

    .content {
        flex: 2;
    }

    .content h3 {
        color: #009dd1;
        font-family: Amadeus;
        font-size: 32px;
        font-weight: lighter;
        margin: 0;
    }

    .content p {
        font-size: 24px;
        font-weight: lighter;
    }

    .media {
        flex: 1;
    }

    #change_template_buttons {
        display: flex;
        flex-direction: row;
    }

    .change_template {
        border: 2px solid #005eb8;
        color: #005eb8;
        font-size: 20px;
        font-weight: bold;
        margin-right: 1em;
        padding: .5em .8em;
        text-decoration: none;
        transition:all 0.3s ease;
    }

    .change_template:hover {
        background: #005eb8;
        color: white;
    }

    .active {
        background: #005eb8;
        color: white;
    }

    /*
        Responsive Media Queries
    */

    /* iPhone Size */
    @media only screen and (max-width: 375px) {
        /*#case {*/
        /*    flex-direction: column;*/
        /*}*/

        /*#change_template_buttons {*/
        /*    display: flex;*/
        /*    flex-direction: row;*/
        /*    justify-content: center;*/
        /*    margin-top: 1em;*/
        /*}*/
    }

    @media only screen and (max-width: 768px) {
        #case {
            flex-direction: column;
        }

        #change_template_buttons {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: 1em;
        }
    }
</style>