import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        "title": "Creative Portfolio (Beta)",
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
                    "paragraph_1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                    "paragraph_2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
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
                    "paragraph_1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                    "paragraph_2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
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
                    "paragraph_1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                    "paragraph_2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
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
                    "paragraph_1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                    "paragraph_2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
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
