import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { Modal } from 'antd'

const MapPage = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalDescription, setModalDescription] = useState('')

  const handleClick = props => () => {
    setModalVisible(!isModalVisible)
    setModalTitle(props.title)
    setModalDescription(props.description)
  }

  const handleOk = () => {
    setModalVisible(!isModalVisible)
  }

  const handleCancel = () => {
    setModalVisible(!isModalVisible)
  }

  const greatPlaceStyle = {
    position: 'absolute',
    transform: 'translate(-50%, -100%)',
  }

  const Marker = props => (
    <img
      style={greatPlaceStyle}
      onClick={handleClick(props)}
      src="https://img.icons8.com/color/20/000000/marker.png"
    />
  )

  let defaultProps = {
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
      <Modal
        title={modalTitle}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{modalDescription}</p>
      </Modal>
      <h1>MAP PAGE</h1>
      <div style={{ height: '84vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDVbQIZYWFU5zfuxRW1Ogt-9GAnmuznuwc' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker
            lat={37.453639}
            lng={-122.445115}
            title={'Beach 1'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
            }
          />
          <Marker
            lat={36.971454}
            lng={-121.952722}
            title={'Beach 2'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
            }
          />
          <Marker
            lat={36.963261}
            lng={-122.009431}
            title={'Beach 3'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
            }
          />
          <Marker
            lat={36.549343}
            lng={-121.929567}
            title={'Beach 4'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
            }
          />
          <Marker
            lat={37.004131}
            lng={-122.185773}
            title={'Beach 5'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
            }
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default MapPage
