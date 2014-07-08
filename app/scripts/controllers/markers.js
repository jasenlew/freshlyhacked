'use strict';

app.controller('MarkersController', [ "$scope", function($scope) {

  angular.extend($scope, {
    center: {
      lat: 37.6833,
      lng: -122.32167,
      zoom: 11
    },
    defaults: {
      scrollWheelZoom: false
    },
    markers: {
      Madrid: {
        lat: 37.6833,
        lng: -122.32167,
        message: "This is Madrid. But you can drag me to another position",
        focus: false,
        draggable: true
      },
      segwayOakland: {
        lat: 37.6833,
        lng: -122.33167,
        message: "This is Segway Oakland, and I can be <strong>stylized</strong>.",
        focus: false,
        draggable: true
      }
    }
  });
}]);