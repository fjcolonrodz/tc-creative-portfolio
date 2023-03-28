import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        "title": "Creative Portfolio",
        "description_1": "Amadeus' Creative team offers strategic designs",
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
                        "description": "No layout or animation changes to the template. The image(s) or video is placed and fitted to the template.",
                        "updates" : "Up to 4 updates allowed per year.",
                        "price" : "$350 / 300€",
                        "template_sets": [
                            {
                                "show" : true,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/4e0d491d7c9358456abca82783833964_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/4e0d491d7c9358456abca82783833964_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/4e0d491d7c9358456abca82783833964_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/4e0d491d7c9358456abca82783833964_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                            {
                                "show" : false,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/363f388305cc018212ea382690effed8_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/363f388305cc018212ea382690effed8_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/363f388305cc018212ea382690effed8_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/363f388305cc018212ea382690effed8_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                            {
                                "show" : false,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/0d3fad03f48eb78d67bcfacf32b4d0b2_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/0d3fad03f48eb78d67bcfacf32b4d0b2_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/0d3fad03f48eb78d67bcfacf32b4d0b2_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/0d3fad03f48eb78d67bcfacf32b4d0b2_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                            {
                                "show" : false,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/67d03233760c7cc707c6d7d5eece2d39_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/67d03233760c7cc707c6d7d5eece2d39_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/67d03233760c7cc707c6d7d5eece2d39_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/67d03233760c7cc707c6d7d5eece2d39_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                        ],
                    },
                    // {
                    //     "name": "Personalized Banners",
                    //     "description": "Specific adjustments to image or text.",
                    //     "updates" : "Up to 4 updates allowed per year.",
                    //     "template_sets": [
                    //         {
                    //             "show" : true,
                    //             "templates": [
                    //                 {
                    //                     "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                    //                     "width": "160",
                    //                     "height": "600"
                    //                 },
                    //                 {
                    //                     "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                    //                     "width": "300",
                    //                     "height": "600"
                    //                 },
                    //                 {
                    //                     "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                    //                     "width": "300",
                    //                     "height": "250"
                    //                 },
                    //                 {
                    //                     "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html",
                    //                     "width": "728",
                    //                     "height": "90"
                    //                 }
                    //             ]
                    //         },
                    //     ],
                    // },
                    {
                        "name": "Custom Designed Banners",
                        "description": "The banner is styled to match the client's branding. The image(s) or video is placed and fitted to the custom template.",
                        "price" : "Price on request starting at $800",
                        "template_sets": [
                            {
                                "show" : true,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/e42b373b2a67ab210545652c1c861feb_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/649b8bd31968395ee24b935fea71461d_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/fcb4567ab690c8a3354ebf01aef22a71_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/a691cb12cce33a35d3c96c1184efc1aa_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                            {
                                "show" : false,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/9d9ee608caa7128ed6e961ee60ff0301_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/df9d6dec068bedf03562758153199064_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/505f7e1ab0b765f7a9050050a96a7c72_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/ddb8e2077043cf876f9cdebc805e46b2_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                            {
                                "show" : false,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/262253eb334f94f89525d0b051ff1a37_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/a631a587fb8e3c59d338dc0a20d4fb52_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/83dabf61d4f949c97c927044451ef754_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/6c5584aeca7e3343f4efdca8392533cb_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                            {
                                "show" : false,
                                "templates": [
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/42ced1100ce1be7a8421d35039fa404c_html/index.html",
                                        "width": "160",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/42ced1100ce1be7a8421d35039fa404c_html/index.html",
                                        "width": "300",
                                        "height": "600"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/42ced1100ce1be7a8421d35039fa404c_html/index.html",
                                        "width": "300",
                                        "height": "250"
                                    },
                                    {
                                        "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/42ced1100ce1be7a8421d35039fa404c_html/index.html",
                                        "width": "728",
                                        "height": "90"
                                    }
                                ]
                            },
                        ],
                    },
                ]
            },
            {
                "name" : "Add-Ons",
                "price" : "$200 / 200€",
                "categories" : [
                    {
                        "name" : "Booking Mask",
                        "show" : true,
                        "description" : "Get the client to take the first step of their booking journey directly on the display ad, by allowing them to select the date and length of stay. This preselection will then auto-populate on iHotelier booking engine to speed up the booking process.",
                        "templates": [
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/64307e41-864b-4488-94ce-b9b0f48c96bb_html/index.html",
                                "width": "160",
                                "height": "600"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/f2d8bbd0-b597-4ceb-8e26-413b1a7a9467_html/index.html",
                                "width": "300",
                                "height": "600"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/05db7c03-f84c-4704-b39d-4b6aee5bfc04_html/index.html",
                                "width": "300",
                                "height": "250"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/92663f2c-9db4-4e90-a2ad-1b1d6e1a6726_html/index.html",
                                "width": "728",
                                "height": "90"
                            }
                        ]
                    },
                    {
                        "name" : "Seasonal",
                        "show" : false,
                        "description" : "Take the attention of the customer with seasonal effects/particles on top of the animated banner",
                        "templates": [
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/379481fd-acc5-4e90-b7d5-3ddd6337a30b_html/index.html",
                                "width": "160",
                                "height": "600"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/1fe42e03-14fe-4492-b9f4-fad354456c35_html/index.html",
                                "width": "300",
                                "height": "600"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/605771a3-f006-413e-8d89-1ccc25e55720_html/index.html",
                                "width": "300",
                                "height": "250"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/9757ed7f-0155-43bd-a91f-0fd2a974e579_html/index.html",
                                "width": "728",
                                "height": "90"
                            }
                        ]
                    },
                    {
                        "name" : "Interactive",
                        "show" : false,
                        "description" : "Give the customer the freedom to discover the hotel and interact with the banner without being immediately redirected to the website.",
                        "templates": [
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/c3b35f5b-d5a5-48db-aabe-596dc2bfd1ce_html/index.html",
                                "width": "160",
                                "height": "600"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/bcecfc53-67e5-4e87-b189-d05a8287362f_html/index.html",
                                "width": "300",
                                "height": "600"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/5dc8a73a-f185-4f14-984d-f5e1c93d5d62_html/index.html",
                                "width": "300",
                                "height": "250"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/5c4e7efd-3df2-4f79-a59e-9b58f056c7ff_html/index.html",
                                "width": "728",
                                "height": "90"
                            }
                        ]
                    },
                    {
                        "name" : "Carousel",
                        "show" : false,
                        "description" : "Live gallery of rotating images taking the customer on a journey across the hotel and its facilities in one single banner.",
                        "templates": [
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/d22584e6-c510-4f9a-bb39-27ab90165ee4_html/index.html",
                                "width": "160",
                                "height": "600"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/f3ff582e-2fa8-4abb-99d8-6e44fe894c1f_html/index.html",
                                "width": "300",
                                "height": "600"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/8acf0f97-95f3-4f11-81ed-a4efe02bd7dc_html/index.html",
                                "width": "300",
                                "height": "250"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/2be7b295-c655-4e7a-a19a-c024594e1e9d_html/index.html",
                                "width": "728",
                                "height": "90"
                            }
                        ]
                    },
                    {
                        "name" : "Star Rating",
                        "show" : false,
                        "description" : "Showcase customers rating directly on the banner to establish credibility and quality. Ratings can be taken from TripAdvisor or any other rating place.",
                        "templates": [
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/11b31d45-f7ac-4393-a305-be0caffaec4c_html/index.html",
                                "width": "160",
                                "height": "600"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/b446f053-77cb-4812-afa1-954b4681f572_html/index.html",
                                "width": "300",
                                "height": "600"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/6640e196-df6f-4a09-85fb-b2baff6688ee_html/index.html",
                                "width": "300",
                                "height": "250"
                            },
                            {
                                "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/944e65eb-5855-49a1-a216-a6ef71d8e336_html/index.html",
                                "width": "728",
                                "height": "90"
                            }
                        ]
                    },
                    // {
                    //     "name" : "Weather Widget",
                    //     "show" : false,
                    //     "description" : "Presents live weather at destination in order to encourage the desire to travel.",
                    //     "templates": [
                    //         {
                    //             "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/18c9a7a6b0be372cf04d401abfd80899_html/index.html",
                    //             "width": "160",
                    //             "height": "600"
                    //         },
                    //         {
                    //             "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/e0533ac52ac42140cf5a49d92c28c718_html/index.html",
                    //             "width": "300",
                    //             "height": "600"
                    //         },
                    //         {
                    //             "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/585881580a0098077568e8a0647c2d9c_html/index.html",
                    //             "width": "300",
                    //             "height": "250"
                    //         },
                    //         {
                    //             "url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/c635f028f6b2edc00aade54d39ebee9d_html/index.html",
                    //             "width": "728",
                    //             "height": "90"
                    //         }
                    //     ]
                    // },
                ]
            },
            {
                "name": "Social Videos",
                "description": "Social videos for advertisement on Facebook, Instagram, YouTube, and Pinterest.",
                "categories": [
                    {
                        "name": "6 seconds",
                        "show": true,
                        "videos": [
                            {"url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/f487479ad0b28b68932328e2e6760da4_vid/6s.mp4"},
                            {"url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/71408dd7-d469-4758-9d42-0b1c09de9967_vid/6%20Seconds%20Template.mp4"},
                        ]
                    },
                    {
                        "name": "15-20 seconds",
                        "show": false,
                        "videos": [
                            {"url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/a28b94dc-4dd4-4153-971c-26615c601de2_vid/15%20Seconds%20Template.mp4"},
                            {"url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/a58868487b826dba757ab3e993189ab4_vid/15s.mp4"},
                        ]
                    },
                    {
                        "name": "Story",
                        "show": false,
                        "videos": [
                            {"url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/1a567878c8f59a5f3abbbc645c190eb4_vid/Story.mp4"},
                            {"url": "//adpiler.s3.eu-central-1.amazonaws.com/ads/69c327d8b94936dbcadacd8cac2300f1_vid/Story_images.mp4"},
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
