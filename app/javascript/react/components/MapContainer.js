import React from 'react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let map
    let initMap = () => {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      })
    }

    initMap()
  }


  render(){
    return(
      <div id="map" className="map-box">Hello</div>
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
