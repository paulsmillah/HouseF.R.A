var APP_DATA = {
  "scenes": [
    {
      "id": "0-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.25723412414889424,
          "pitch": 0.17542787389665548,
          "rotation": 0,
          "target": "1-estar"
        },
        {
          "yaw": 0.7480639522872927,
          "pitch": 0.23049125901767908,
          "rotation": 0,
          "target": "2-dormitorio-1"
        },
        {
          "yaw": 0.8797286556951533,
          "pitch": 0.46989055107950684,
          "rotation": 0,
          "target": "4-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-estar",
      "name": "ESTAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6319573060913193,
          "pitch": 0.33570722519097806,
          "rotation": 0,
          "target": "5-pasillo"
        },
        {
          "yaw": -0.19826570572040936,
          "pitch": 0.11011394747122161,
          "rotation": 0,
          "target": "0-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dormitorio-1",
      "name": "DORMITORIO 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3680298440033605,
          "pitch": 0.5514187410047011,
          "rotation": 0,
          "target": "5-pasillo"
        },
        {
          "yaw": 2.2503957391392317,
          "pitch": 0.06449799129259226,
          "rotation": 0,
          "target": "3-dormitorio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dormitorio-2",
      "name": "DORMITORIO 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8069753262764667,
          "pitch": 0.21645963549677916,
          "rotation": 0,
          "target": "5-pasillo"
        },
        {
          "yaw": -2.6056407228281895,
          "pitch": -0.025653813172365147,
          "rotation": 0,
          "target": "2-dormitorio-1"
        },
        {
          "yaw": -2.5380886633785593,
          "pitch": 0.7274112892391571,
          "rotation": 0,
          "target": "4-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bao",
      "name": "BAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.856128976256338,
          "pitch": 0.230635283195344,
          "rotation": 0,
          "target": "5-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pasillo",
      "name": "PASILLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5331909031297117,
          "pitch": 0.45728993353318614,
          "rotation": 0,
          "target": "2-dormitorio-1"
        },
        {
          "yaw": -1.6307026145712236,
          "pitch": 0.2331931335390962,
          "rotation": 0,
          "target": "3-dormitorio-2"
        },
        {
          "yaw": -1.7299922628716438,
          "pitch": 0.6476324650594663,
          "rotation": 0,
          "target": "4-bao"
        },
        {
          "yaw": -0.5085514887904203,
          "pitch": 0.40315026140527266,
          "rotation": 0,
          "target": "0-cocina"
        },
        {
          "yaw": 0.4065546437872385,
          "pitch": 0.18977494508760273,
          "rotation": 0,
          "target": "1-estar"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
