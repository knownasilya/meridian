'use strict';

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var doc = global.document;

function Meridian(node, mappingLibrary, options) {
  this.node = typeof node === 'string' ? doc.querySelector(node) : node;
  this.options = options;
  this.mappingLibrary = mappingLibrary;

  if (!mappingLibrary) {
    throw new Error('Base mapping library was unspecified. Meridian requires a base library, i.e. Leaflet or Google Maps');
  }

  if (mappingLibrary) {
    // TODO: check if leaflet or gmaps
     
  }
}

util.inherits(Map, EventEmitter);

function Map(map) {
  this.map = map;
  this.isLeaflet = true;

  EventEmitter.call(this);
}

Map.prototype.setView = function (latlng, zoom) {
  if (this.isLeaflet) {
    this.map.setView(latlng, zoom);
  }
  else {
    this.map.panTo(latlng);
    this.map.setZoom(zoom);
  }
};
