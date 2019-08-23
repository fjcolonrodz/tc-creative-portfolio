import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        "title": "Creative Portfolio",
        "description_1": "TravelClick's Creative team offers strategic designs",
        "description_2": "for clients such as Google Display Ads that are",
        "description_3": "templates, personalized, or custom designed.",
        "description_4": "The team also creates Social Videos for advertisement",
        "description_5": "on Facebook, Instagram, YouTube, and Pinterest.",
        "products": [
            {
                "name": "Display Ads",
                "categories": [
                    {
                        "name": "Templated Banners",
                        "description": "No changes to template. Just fitting of photo or video into our banners. Up to 4 updates allowed per year.",
                        "image": require("./assets/building6.png"),
                        "template_sets": [
                            {
                                "show" : true,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/313af0a45b479afd38dbf53bc052fc12_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/313af0a45b479afd38dbf53bc052fc12_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/313af0a45b479afd38dbf53bc052fc12_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/313af0a45b479afd38dbf53bc052fc12_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                            {
                                "show" : false,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/f7d67154dab0831bca2b04fc5d31749f_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/f7d67154dab0831bca2b04fc5d31749f_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/f7d67154dab0831bca2b04fc5d31749f_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/f7d67154dab0831bca2b04fc5d31749f_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                            {
                                "show" : false,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/e2fcfc5884a8cdcb0880419f5234536e_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/e2fcfc5884a8cdcb0880419f5234536e_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/e2fcfc5884a8cdcb0880419f5234536e_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/e2fcfc5884a8cdcb0880419f5234536e_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                            {
                                "show" : false,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/f64014d4d507a627ee6405c0a6edeba7_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/f64014d4d507a627ee6405c0a6edeba7_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/f64014d4d507a627ee6405c0a6edeba7_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/f64014d4d507a627ee6405c0a6edeba7_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                        ],
                    },
                    {
                        "name": "Personalized Banners",
                        "description": "Specific adjustments to image or text. Up to 4 updates allowed per year.",
                        "image": require("./assets/Man3.png"),
                        "template_sets": [
                            {
                                "show" : true,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                            {
                                "show" : false,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                        ],
                    },
                    {
                        "name": "Custom Designed Banners",
                        "description": "Custom design description.",
                        "image": require("./assets/UXI2.png"),
                        "template_sets": [
                            {
                                "show" : true,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b74aa737b21b62fd3b92d548d9a1f177_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/1fe8e6e42e46989079c72202ae9fab0b_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/1a863f7bec438c34c7fd5ec0f05c9d73_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/7808aa0ce68f068a463749016b583ce5_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                            {
                                "show" : false,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/ee351a2c3795bb0042d773b9580571e6_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/a279dd14458d94c66ecd62144bab2c65_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/a178f7165fdf819792676ee1378ed277_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/17ecee2e017b4aff2163ea035728dee2_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                            {
                                "show" : false,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/37548db66b0ebeed41b8ecfc05bf1715_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/47288eb03a8d6248922148d1b21bf640_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/9d00ef6515d19116535c2aae672cfe37_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/65b2d88e3d1f9341f5a9d2df07257328_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                            {
                                "show" : false,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/399d72c70a99b8a99d9930ff73a7cbfb_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/63fef0af02196ec66a130289ec0ff5d5_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/5afa24fbadcc6f403cba4b2abbe22873_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/8f67c618694d14896de688a7a2992238_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                        ],
                    },
                    {
                        "name": "Add-Ons",
                        "description": "Add-ons description.",
                        "image": 'n/a',
                        "template_sets": [
                            {
                                "name" : "Star Rating",
                                "show" : true,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/0c13c0f832a5b3988f9666c03713c376_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/2c9c068a6335ca0ef20aa3bf58c2b6cd_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/98d639000b239383febdea6742cd429f_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/a23671c208b78917efca2eee7e242bb4_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                            {
                                "name" : "Weather Widget",
                                "show" : false,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/18c9a7a6b0be372cf04d401abfd80899_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/e0533ac52ac42140cf5a49d92c28c718_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/585881580a0098077568e8a0647c2d9c_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/c635f028f6b2edc00aade54d39ebee9d_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                        ],
                    }
                ]
            },
            {
                "name": "Social Videos",
                "description": "Social videos for advertisement on Faebook, Instagram, Youtube, and Pinterest.",
                "categories": [
                    {
                        "name": "6 seconds",
                        "show": true,
                        "videos": [
                            {"url": require("./assets/video.mp4")},
                            {"url": require("./assets/video.mp4")},
                            {"url": require("./assets/video.mp4")},
                            {"url": require("./assets/video.mp4")}
                        ]
                    },
                    {
                        "name": "15-20 seconds",
                        "show": false,
                        "videos": [
                            {"url": require("./assets/video2.mp4")},
                            {"url": require("./assets/video2.mp4")},
                            {"url": require("./assets/video2.mp4")},
                            {"url": require("./assets/video2.mp4")}
                        ]
                    },
                    {
                        "name": "Story",
                        "show": false,
                        "videos": [
                            {"url": require("./assets/video3.mp4")},
                            {"url": require("./assets/video3.mp4")},
                            {"url": require("./assets/video3.mp4")},
                            {"url": require("./assets/video3.mp4")},
                        ]
                    },
                ]
            },
        ],
        "caseStudies": {
            "name": "Case Studies",
            "cases": [
                {
                    "show" : true,
                    "title": "Case Study 1",
                    "paragraph_1": "Lorem ipsum ut lacus dapibus magna nam consequat ultricies aliquam donec ullamcorper vulputate quis leo sem gravida lacus dictumst cursus primis curae vestibulum faucibus purus platea gravida et.",
                    "paragraph_2": "Senectus eros molestie nam sagittis dictumst ullamcorper porta senectus tellus tristique, class condimentum leo eget facilisis convallis ornare sollicitudin sagittis, curabitur etiam vehicula ornare etiam in sapien congue donec nunc lacus dolor fermentum odio nec.",
                    "banner":
                        {
                            "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                            "width": "300",
                            "height": "250"
                        }
                },
                {
                    "show" : false,
                    "title": "Case Study 2",
                    "paragraph_1": "Hac proin hendrerit himenaeos nostra placerat senectus tortor netus porta mauris, purus ligula est molestie justo urna ornare lobortis praesent congue, netus ullamcorper mauris vivamus etiam quisque fames diam sociosqu.",
                    "paragraph_2": "Dui ut purus fringilla dictumst facilisis congue aliquam aenean, himenaeos etiam tristique augue urna nostra ante purus vitae, taciti imperdiet eleifend dictumst suscipit potenti egestas semper dui habitant sapien.",
                    "banner":
                        {
                            "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                            "width": "300",
                            "height": "250"
                        }
                },
                {
                    "show" : false,
                    "title": "Case Study 3",
                    "paragraph_1": "Eget interdum pretium dolor commodo maecenas leo tempor diam etiam, consectetur luctus placerat sagittis et neque augue class, integer aenean neque libero consequat sit dictum turpis.",
                    "paragraph_2": "Phasellus auctor ligula sapien velit rutrum justo senectus ad pharetra, suspendisse leo commodo inceptos urna senectus id potenti, orci vulputate platea porttitor porta mi id senectus.\n" +
                        "\n",
                    "banner":
                        {
                            "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                            "width": "300",
                            "height": "250"
                        }
                },
                {
                    "show" : false,
                    "title": "Case Study 4",
                    "paragraph_1": "Elit odio suspendisse adipiscing felis ultrices fames tincidunt turpis inceptos velit pharetra, lacus class volutpat nisl consequat felis mollis habitant purus.",
                    "paragraph_2": "Purus tincidunt arcu ultricies id ornare fames malesuada maecenas sollicitudin venenatis sapien etiam adipiscing, felis leo vitae elit phasellus iaculis fringilla curae netus mollis molestie.",
                    "banner":
                        {
                            "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                            "width": "300",
                            "height": "250"
                        }
                },
            ]
        }
    },
    mutations: {},
    actions: {}
})
