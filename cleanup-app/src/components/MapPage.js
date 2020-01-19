import React from 'react'
import GoogleMapReact from 'google-map-react'

const greatPlaceStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -100%)',
}

const Marker = () => (
  <img
    style={greatPlaceStyle}
    src="https://img.icons8.com/color/20/000000/marker.png"
  />
)

const Markers = () => {
  return [
    <Marker lat={37.453639} lng={-122.445115} />,
    <Marker lat={36.971454} lng={-121.952722} />,
    <Marker lat={36.963261} lng={-122.009431} />,
    <Marker lat={36.549343} lng={-121.929567} />,
    <Marker lat={37.00413} lng={-122.185773} />,
  ]
}

const MapPage = () => {
  const defaultProps = {
    center: {
      lat: 36.962043,
      lng: -122.007636,
    },
    zoom: 13,
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      defaultProps.center.lat = position.coords.latitude
      defaultProps.center.lng = position.coords.longitude
    })
  }
  return (
    <div>
      <h1>MAP PAGE</h1>
      <div style={{ height: '84vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDVbQIZYWFU5zfuxRW1Ogt-9GAnmuznuwc' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker lat={37.453639} lng={-122.445115} />
          <Marker lat={36.971454} lng={-121.952722} />
          <Marker lat={36.963261} lng={-122.009431} />
          <Marker lat={36.549343} lng={-121.929567} />
          <Marker lat={37.00413} lng={-122.185773} />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default MapPage
