import React, { useState } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { Modal, Progress, Statistic } from 'antd'
import { withRouter } from 'react-router-dom'
import jwt from 'jsonwebtoken'

const MapPage = props => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalDescription, setModalDescription] = useState('')
  const [percent, setPercent] = useState(0.0)
  const [progress, setProgress] = useState(0.0)
  const [goal, setGoal] = useState(1.0)
  const [locUrl, setUrl] = useState('')
  const [pos, setPos] = useState(null)
  const [timeStamp, setTimeStamp] = useState(null)

  const handleClick = markerProps => {
    setModalVisible(!isModalVisible)
    setModalTitle(markerProps.title)
    setModalDescription(markerProps.description)
    setUrl(
      'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' +
        markerProps.position.lat +
        ',' +
        markerProps.position.lng +
        '&fov=80&heading=70&pitch=0&key=AIzaSyDVbQIZYWFU5zfuxRW1Ogt-9GAnmuznuwc'
    )
    setPos(markerProps.position)
    setProgress(markerProps.progress)
    setGoal(markerProps.goal)
    setPercent(((markerProps.progress / markerProps.goal) * 100).toFixed(1))
    setTimeStamp(markerProps.timeStamp)
    props.setCollapse(true)
  }
  const handleOk = () => {
    console.log(props)
    setModalVisible(!isModalVisible)
    const token = jwt.sign(
      {
        title: modalTitle,
        description: modalDescription,
        pos: pos,
        percent: percent,
        progress: progress,
        goal: goal,
        locUrl: locUrl,
        timeStamp: timeStamp,
      },
      'secwet'
    )
    props.history.push({
      pathname: `/details`,
      search: `${token}`,
    })
  }

  const handleCancel = () => {
    setModalVisible(!isModalVisible)
  }

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
        pos={pos}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={'More'}
        className="modal"
      >
        <center>
          <img
            src={locUrl}
            className="modal-img"
            style={{ width: '85%' }}
          ></img>
        </center>
        <p>{modalDescription}</p>
        {percent < 100 ? (
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
              }}
            >
              <h3 style={{ marginBottom: '0px', textAlign: 'center' }}>
                Percentage Funded:
              </h3>
              <Statistic value={`$${progress}`} suffix={`/ $${goal}`} />
            </div>
            <Progress
              percent={percent}
              status="active"
              strokeColor={{
                '0%': '#ebd494',
                '100%': '#a1cdf4',
              }}
            />
          </div>
        ) : (
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
              }}
            >
              <h2 style={{ marginBottom: '0px', textAlign: 'center' }}>
                Funded!
              </h2>
              <Statistic value={`$${progress}`} suffix={`/ $${goal}`} />
            </div>
            <Progress percent={percent.toFixed(2)} />
          </div>
        )}
      </Modal>
      <Map
        google={props.google}
        className="map"
        defaultCenter={defaultProps.center}
        zoom={defaultProps.zoom}
        initialCenter={defaultProps.center}
      >
        <Marker
          position={{ lat: 37.453639, lng: -122.445115 }}
          title={'Poplar Beach'}
          description={`Poplar Beach is the premier location for surfing in the Half Moon Bay area and is loved by many for its beautiful coastal trail and expansive shores. The unfortunate situation: the beach has seen better days. As a popular spot for weekend bonfire parties, surfing, and hiking, this lovely beach gets a lot of traffic; however, the community's reluctance to "pack out" their trash means that there is now a collection of glass bottles and solo cups littering the shore. Our goal for the day is to collect 25 pounds of trash!`}
          progress={80.0}
          goal={120.0}
          timeStamp={new Date('2020-03-25').getTime()}
          onClick={handleClick}
        />
        <Marker
          position={{ lat: 36.971454, lng: -121.952722 }}
          title={'Capitola Beach'}
          description={`The Capitola Beach is a lovely place to spend an afternoon, but without trash cans, it is difficult to act with good "leave no trace" ethics. Help us source and install 5 trash and recycling bins along the beach's range.`}
          progress={35.0}
          goal={75.0}
          timeStamp={new Date('2020-03-25').getTime()}
          onClick={handleClick}
        />
        <Marker
          position={{ lat: 36.963261, lng: -122.009431 }}
          title={'Seabright Beach'}
          description={`Stretching out for a half-mile, this sandy beach sits between the Santa Cruz Beach Boardwalk and the Santa Cruz Harbor. Although considered a smaller beach by some, Seabright is a well-known spot for sun worshippers, dog lovers, and those wanting a local favorite spot to catch the sunrise or sunset. Enter Seabright State Beach at the main entrance near the Santa Cruz Museum of Natural History on East Cliff Drive or near the harbor off Atlantic Avenue.`}
          progress={25.0}
          goal={35.0}
          timeStamp={new Date('2020-03-25').getTime()}
          onClick={handleClick}
        />
        <Marker
          position={{ lat: 36.549343, lng: -121.929567 }}
          title={'Carmel Beach'}
          description={`In Carmel-by-the-Sea itself, right at the foot of Ocean Avenue, is Carmel Beach (not to be confused with Carmel River Beach, just a mile south). It's locally renowned for good surf and excellent dog-walking conditions, as well as breathtaking sunsets. An annual sandcastle contest is testimony to the quality of the silvery sands, which are punctuated by outcroppings of rock. We will be packing out our trash, so we ready to hike!`}
          progress={30.0}
          goal={30.0}
          timeStamp={new Date('2020-03-25').getTime()}
          onClick={handleClick}
        />
        <Marker
          position={{ lat: 37.004131, lng: -122.185773 }}
          title={'Shark Fin Cove'}
          description={`This beach, south of Davenport, is easy to get to, but you have to know where to look. We will meet at Whale City Bakery and hike in together. During high tide, the water can be a few feet high so bring boots and be ready to get wet.`}
          progress={80.0}
          goal={100.0}
          timeStamp={new Date('2020-03-25').getTime()}
          onClick={handleClick}
        />
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDVbQIZYWFU5zfuxRW1Ogt-9GAnmuznuwc',
})(withRouter(MapPage))
