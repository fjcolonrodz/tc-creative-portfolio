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
                        "image": "add_image_url_here",
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
                        "image": "add_image_url_here",
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
                        "image": "add_image_url_here",
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
                        "videos": [
                            {"facebook": "add_video_url_here"},
                            {"youtube": "add_video_url_here"},
                            {"instagram": "add_video_url_here"},
                            {"pinteres": "add_video_url_here"}
                        ]
                    },
                    {
                        "name": "15-20 seconds",
                        "videos": [
                            {"facebook": "add_video_url_here"},
                            {"youtube": "add_video_url_here"},
                            {"instagram": "add_video_url_here"},
                            {"pinteres": "add_video_url_here"}
                        ]
                    },
                    {
                        "name": "Story",
                        "videos": [
                            {"facebook": "add_video_url_here"},
                            {"youtube": "add_video_url_here"},
                            {"instagram": "add_video_url_here"},
                            {"pinteres": "add_video_url_here"}
                        ]
                    },
                ]
            },
        ],
        "caseStudies": {
            "name": "Case Studies",
            "cases": [
                {
                    "title": "Hotel_name",
                    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat id metus imperdiet egestas.",
                    "banner_url": "add_banner_url_here"
                },
                {
                    "title": "Hotel_name",
                    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat id metus imperdiet egestas.",
                    "banner_url": "add_banner_url_here"
                },
                {
                    "title": "Hotel_name",
                    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat id metus imperdiet egestas.",
                    "banner_url": "add_banner_url_here"
                },
            ]
        }
    },
    mutations: {},
    actions: {}
})