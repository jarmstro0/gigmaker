import React from 'react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    let map
    let initMap = () => {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: this.props.lat, lng: this.props.long},
        zoom: 15
      })
    }

    initMap()
  }

  componentWillReceiveProps(newProps) {

    let map
    let initMap = () => {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: newProps.lat, lng: newProps.long},
        zoom: 15
      })
    }

    initMap()
  }


  render(){
    return(
      <div id="map" className="map-box"></div>
    )
  }
}

export default MapContainer;


function loadJS(src) {
  let ref = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}
