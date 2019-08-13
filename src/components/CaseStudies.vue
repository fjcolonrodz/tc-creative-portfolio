<template>
    <div id="case_studies">
        <div class="title">
            <h2>{{ caseStudies.name}}</h2>
            <div class="line"></div>
        </div>
        <template v-for="(item, index) in caseStudies.cases" >
            <div id="cases" v-if="item.show" :key="index" >
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
    #case_studies {
        padding: 1em 9em;
        position: relative;
    }

    .title h2 {
        color: #005eb8;
        font-family: Amadeus;
        font-size: 36px;
        font-weight: lighter;
    }

    .line {
        position: absolute;
        top: 85px;
        left: 143px;
        width: 20px;
        height: 2px;
        background: #005eb8;
    }

    #cases {
        /*background: red;*/
        display: flex;
    }

    .content {
        /*background: green;*/
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

    #change_template_buttons {
        margin: 3em 0;
    }

    .change_template {
        border: 2px solid #005eb8;
        color: #005eb8;
        margin-right: 1em;
        padding: .5em .8em;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
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

    .media {
        display: flex;
        /*background: blue;*/
        flex: 1;
        align-items: center;
        justify-content: center;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        #case_studies {
            padding: 2em;
        }

        .line {
            position: absolute;
            top: 100px;
            left: 2em;
            width: 20px;
            height: 2px;
            background: #005eb8;
        }

        #cases {
            /*background: red;*/
            flex-direction: column;
        }

        #change_template_buttons {
            margin: 3em auto;
        }
    }
</style>