import React from "react"
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCx7CZ1P0YdqirwlJ4jPdrMO20NQwSPkbI&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: `100%`}}/>,
    mapElement: <div style={{height: `100%`}}/>,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.ll}
    defaultOptions={DEFAULT_OPTION}>
    <Marker
      position={props.ll}
      title={"Olin College"}
      icon={process.env.PUBLIC_URL + "img/point_address.png"}
    />
  </GoogleMap>
);

class MyMapComponent extends React.PureComponent {

  render() {
    return (
      <MapComponent
        ll={this.props.ll}
      />
    )
  }
}

// Map style
const DEFAULT_OPTION = {
  streetViewControl: false,
  fullscreenControl: false,
  gestureHandling: 'cooperative',
  mapTypeControl: false, styles: [{
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }]
  },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "road.local",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "visibility": "on"
      }]
    },
    {
      "featureType": "road.arterial",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "color": "#5f94ff"
      },
        {
          "lightness": 26
        },
        {
          "gamma": 5.86
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{
        "weight": 0.6
      },
        {
          "saturation": -85
        },
        {
          "lightness": 61
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "hue": "#0066ff"
      },
        {
          "saturation": 74
        },
        {
          "lightness": 100
        }
      ]
    }
  ]
};

export default MyMapComponent
