import 'ol/ol.css';
import 'ol-layerswitcher/src/ol-layerswitcher.css';
import "./index.css"


import Map from 'ol/Map';
import View from 'ol/View';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import BingMaps from 'ol/source/BingMaps';
import XYZ from 'ol/source/XYZ';
import GPX from 'ol/format/GPX';
import Feature from 'ol/Feature';
import Polygon from 'ol/geom/Polygon';
import Point from 'ol/geom/Point';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import LayerGroup from 'ol/layer/Group';
import LayerSwitcher from 'ol-layerswitcher';
import { fromLonLat } from 'ol/proj';

import ipyGpx from "./gpx/salto-do-ipy.gpx";
import mutumGpx from "./gpx/cachoeira-do-mutum.gpx";
import sussuGpx from "./gpx/cachoeira-da-sussuarana.gpx";

const BING_MAPS_KEY = 'AspK-Z2kt8RW02fvGpQV4eXwUozZRwiO8Us9azg-fCTQ_IgdMSTTHLfjnHEZgfyN'
let bingBasemap = new TileLayer({
  title: 'Bing Maps',
  type: 'base',
  source: new BingMaps({
    imagerySet: 'Aerial',
    key: BING_MAPS_KEY //key from www.bingmapsportal.com
  })
});

let esriBasemap = new TileLayer({
  title: 'Esri Maps',
  visible: false,
  type: 'base',
  source: new XYZ({
    attributions: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
        'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
  })
})

var ipyLayer = new VectorLayer({
  title: 'Salto do Ipy',
  visible: false,
  source: new VectorSource({
    url: ipyGpx,
    format: new GPX()
  })
});
ipyLayer.on('postrender', function(evt){
  map.getView().fit(ipyLayer.getExtent())
});

var mutumLayer = new VectorLayer({
  title: 'Mutum',
  visible: false,
  source: new VectorSource({
    url: mutumGpx,
    format: new GPX()
  })
});
mutumLayer.on('postrender', function(evt){
  map.getView().fit(mutumLayer.getExtent())
});

var sussuLayer = new VectorLayer({
  title: 'Sussuarana',
  visible: false,
  source: new VectorSource({
    url: sussuGpx,
    format: new GPX()
  })
})

var map = new Map({
  layers: [
    new LayerGroup({
      'title': 'Base maps',
      layers: [
        bingBasemap,
        esriBasemap,
      ]
    }),
    new LayerGroup({
      'title': 'Cachoeiras',
      layers: [
        ipyLayer,
        mutumLayer,
        sussuLayer
      ]
    }),
  ],
  target: document.getElementById('map'),
  view: new View({
    center: fromLonLat([-60.0217314, -3.1190275]),
    zoom: 12
  })
});
map.addControl(new LayerSwitcher());