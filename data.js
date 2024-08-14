var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "HALL",
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
        "yaw": -1.5101208357602012,
        "pitch": -0.00545955034710488,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -1.2911946876528564,
          "pitch": 0.06485943977254216,
          "rotation": 0,
          "target": "1-living-comedor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2408511550790617,
          "pitch": -0.3278706917919312,
          "title": "Bienvenidos a&nbsp;Emperador I",
          "text": "Este nuevo desarrollo inmobiliario de estilo francés en San Miguel combina elegancia y confort en un edificio de ocho pisos con 24 unidades de alta categoría. Ofrece una fusión de diseño clásico y comodidades modernas, con unidades de dos y tres ambientes que destacan por su lujo y funcionalidad. Los interiores incluyen pisos de porcelanato simil madera, aberturas con doble vidriado hermético, calefacción por losa radiante y amplios balcones con parrilla. Ubicado cerca de una zona gastronómica reconocida, este edificio redefine la vida urbana con un toque europeo en un entorno dinámico."
        }
      ]
    },
    {
      "id": "1-living-comedor",
      "name": "LIVING COMEDOR",
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
          "yaw": 2.0043375115700623,
          "pitch": 0.1313574905508723,
          "rotation": 1.5707963267948966,
          "target": "0-hall"
        },
        {
          "yaw": -1.0817892006090108,
          "pitch": 0.06017209672855017,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": 1.6980397148995277,
          "pitch": -0.005400801999396521,
          "rotation": 1.5707963267948966,
          "target": "3-bao"
        },
        {
          "yaw": 1.492923353402622,
          "pitch": -0.00369875766813621,
          "rotation": 4.71238898038469,
          "target": "4-habitacin"
        },
        {
          "yaw": 1.590815483715767,
          "pitch": 0.14046873205428412,
          "rotation": 0,
          "target": "5-habitacin-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
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
        "yaw": -1.2141855344203538,
        "pitch": 0.07990469402516354,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 1.628007926227098,
          "pitch": 0.052756858630596426,
          "rotation": 0,
          "target": "1-living-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bao",
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
        "yaw": 2.3630431710193163,
        "pitch": 0.23969890630380952,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 0.948467606226874,
          "pitch": -0.009232629193974162,
          "rotation": 0,
          "target": "1-living-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-habitacin",
      "name": "Habitación",
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
          "yaw": -1.1215066618272758,
          "pitch": -0.06824520716909532,
          "rotation": 1.5707963267948966,
          "target": "1-living-comedor"
        },
        {
          "yaw": -1.390147880242429,
          "pitch": 0.20636962782439383,
          "rotation": 4.71238898038469,
          "target": "5-habitacin-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-habitacin-principal",
      "name": "HABITACIÓN PRINCIPAL",
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
        "yaw": 0.643376976623081,
        "pitch": 0.21171509011491807,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -1.9501053894119593,
          "pitch": 0.16973633836832214,
          "rotation": 0,
          "target": "1-living-comedor"
        },
        {
          "yaw": -3.0433891550858903,
          "pitch": 0.26795549384208783,
          "rotation": 0,
          "target": "6-bao-en-suit---vestidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bao-en-suit---vestidor",
      "name": "BAÑO EN SUIT - VESTIDOR",
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
        "yaw": -3.114757940170362,
        "pitch": 0.11186334295295097,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.06761452801350742,
          "pitch": 0.17486159521878086,
          "rotation": 0,
          "target": "5-habitacin-principal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "emperador I - 3 AMBIENTES",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
