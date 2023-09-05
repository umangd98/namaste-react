import React from "react";
import ReactDOM from "react-dom/client"

//React element 


/*
Header
    Logo
    Nav Items
Body
    Search 
    Restaurant Container
        Restaurant Card
            Img
            Name
            Rating
            Cuisine
            ETA
Footer
    Copyright
    Links
    Contact 
    Address
*/


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const resList =  [
    {
      "info": {
        "id": "148928",
        "name": "Spicy Omelette & Chicken",
        "cloudinaryImageId": "nucnu8xazsagqkcq3lk1",
        "locality": "Mohammad Ali Road",
        "areaName": "Mominpura",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Chinese",
          "Fast Food",
          "Snacks",
          "Biryani",
          "Street Food"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "148928",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3100
        },
        "parentId": "192605",
        "avgRatingString": "3.8",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-05 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-ee31267d-7073-4130-afc0-3e98733f54d0"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/spicy-omelette-and-chicken-mohammad-ali-road-mominpura-nagpur-148928",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "466290",
        "name": "Chacha Rolls",
        "cloudinaryImageId": "tzeuqqtxoha5c1jmaldq",
        "locality": "Mohammad Ali Road",
        "areaName": "Mominpura",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Snacks",
          "Chinese",
          "Fast Food"
        ],
        "avgRating": 3.4,
        "feeDetails": {
          "restaurantId": "466290",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3100
        },
        "parentId": "280031",
        "avgRatingString": "3.4",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-05 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-ee31267d-7073-4130-afc0-3e98733f54d0"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chacha-rolls-mohammad-ali-road-mominpura-nagpur-466290",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "84473",
        "name": "Hotel Bartania",
        "cloudinaryImageId": "mx3egkuefnw7ssd8uhrl",
        "locality": "Mohammad Ali Road",
        "areaName": "Mominpura",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Indian",
          "North Indian",
          "Chinese",
          "Mughlai",
          "Tandoor",
          "Kebabs",
          "Seafood"
        ],
        "avgRating": 3.4,
        "feeDetails": {
          "restaurantId": "84473",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3100
        },
        "parentId": "7965",
        "avgRatingString": "3.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-05 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-ee31267d-7073-4130-afc0-3e98733f54d0"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-bartania-mohammad-ali-road-mominpura-nagpur-84473",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "56325",
        "name": "The Kathi Crossing",
        "cloudinaryImageId": "m2z6w2ht4coiu7vc5mvm",
        "locality": "Ravindranath Tagore Road",
        "areaName": "Sadar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Indian"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "56325",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3100
        },
        "parentId": "4839",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-05 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-ee31267d-7073-4130-afc0-3e98733f54d0"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-kathi-crossing-ravindranath-tagore-road-sadar-nagpur-56325",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "54604",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "dp3bbhabqbzpi9lk05la",
        "locality": "Eternity Mall",
        "areaName": "Sitabuldi",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "54604",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3100
        },
        "parentId": "2456",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 35,
          "serviceability": "SERVICEABLE",
          "slaString": "35 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-05 02:55:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹1299",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-ee31267d-7073-4130-afc0-3e98733f54d0"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-eternity-mall-sitabuldi-nagpur-54604",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "449384",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "uno44ss5wfylnn95latu",
        "locality": "Mata Mandir Road",
        "areaName": "Dharampeth",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.4,
        "feeDetails": {
          "restaurantId": "449384",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3100
        },
        "parentId": "4961",
        "avgRatingString": "3.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-05 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹649",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-ee31267d-7073-4130-afc0-3e98733f54d0"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-mata-mandir-road-dharampeth-nagpur-449384",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "550192",
        "name": "The Sandwich Shop",
        "cloudinaryImageId": "vsq6hnyl6wuibq9ddtke",
        "locality": "Central Bazaar Road",
        "areaName": "Ramdaspeth",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Fast Food",
          "Pastas"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "550192",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3100
        },
        "parentId": "2586",
        "avgRatingString": "4.1",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-05 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-ee31267d-7073-4130-afc0-3e98733f54d0"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-sandwich-shop-central-bazaar-road-ramdaspeth-nagpur-550192",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "539204",
        "name": "Starboy Pizza & Shakes",
        "cloudinaryImageId": "ednse1mtnsfpgspaxbbj",
        "locality": "Saraswati Vihar",
        "areaName": "Gayatri Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "539204",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 8400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 8400
        },
        "parentId": "195514",
        "avgRatingString": "3.8",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 7.1,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "7.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-05 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-ee31267d-7073-4130-afc0-3e98733f54d0"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/starboy-pizza-and-shakes-saraswati-vihar-gayatri-nagar-nagpur-539204",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "739169",
        "name": "Olio - The Wood Fired Pizzeria",
        "cloudinaryImageId": "4b44c7921b1b6073a4ffa58b38f8def1",
        "locality": "Behind Indusind Bank",
        "areaName": "Near Lendra Park",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Fast Food",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "739169",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 3900
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3900
        },
        "parentId": "11633",
        "avgRatingString": "4.3",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "29 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-05 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-ee31267d-7073-4130-afc0-3e98733f54d0"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-behind-indusind-bank-near-lendra-park-nagpur-739169",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ]

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                    Search
            </div>
            <div className="restaurant-container">

               {
                resList.map((res,index)=> (
            <RestaurantCard key={res.info.id} resData = {res}/>
                    
                ))
               }
              

            </div>
        </div>
    )
}




const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = ({resData}) => {
    // console.log(resData);
    // const info = resData.info
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = resData?.info
    return (
        <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="restaurant-logo"
             src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
             <h3>{name}</h3>
             <h4>{cuisines.join(', ')}</h4>
             <h4>{avgRating} stars</h4>
             <h4>{costForTwo}</h4>
             <h4>{sla.slaString}</h4>
            
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)

