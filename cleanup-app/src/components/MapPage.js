import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => (
  <img src="https://img.icons8.com/color/48/000000/marker.png" />
)

const MapPage = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }
  return (
    <div>
      <h1>MAP PAGE</h1>
      <div style={{ height: '84vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDVbQIZYWFU5zfuxRW1Ogt-9GAnmuznuwc' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default MapPage
