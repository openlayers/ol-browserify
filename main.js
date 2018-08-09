import {PluggableMap, View} from 'ol';
import MapRenderer from 'ol/renderer/canvas/Map';
import TileLayerRenderer from 'ol/renderer/canvas/TileLayer';
import {Tile as TileLayer} from 'ol/layer';
import {XYZ} from 'ol/source';
import {defaults as controlDefaults} from 'ol/control';
import {defaults as interactionDefaults} from 'ol/interaction';

PluggableMap.prototype.createRenderer = function() {
  const renderer = new MapRenderer(this);
  renderer.registerLayerRenderers([TileLayerRenderer]);
  return renderer;
}
new PluggableMap({
  target: 'map',
  controls: controlDefaults(),
  interactions: interactionDefaults(),
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
