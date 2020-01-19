import React from 'react'
import { withRouter } from 'react-router-dom'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import jwt from 'jsonwebtoken'
import { Progress, Statistic, Row, Col } from 'antd'

const { Countdown } = Statistic

const DetailsPage = props => {
  const search = props.location.search
  const token = search.substr(1)
  const decoded = jwt.verify(token, 'secwet')

  console.log('decoded', decoded)

  const {
    title,
    description,
    pos,
    percent,
    progress,
    goal,
    locUrl,
    timeStamp,
  } = decoded

  return (
    <div className="details-page-container">
      <h1>{title}</h1>
      <div className="image-description-container">
        <Row>
          <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <img src={locUrl}></img>
          </Col>
          <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <p>{description}</p>
          </Col>
        </Row>
      </div>
      <div className="stats-container">
        <Progress className="progress-bar" percent={percent} />
        <Statistic
          className="stat"
          value={`$${progress}`}
          suffix={`/ $${goal}`}
        />
      </div>
      <div className="countdown-container">
        <Countdown
          title={`Countdown to: ${Date(timeStamp).toString()}`}
          className="countdown"
          value={timeStamp}
          format={`D [days], HH [hours], mm [minutes], ss [seconds]`}
        />
      </div>
      <div>
        <Map
          google={props.google}
          className="map"
          defaultCenter={pos}
          zoom={13}
          initialCenter={pos}
        >
          <Marker
            position={pos}
            title={title}
            description={description}
            progress={progress}
            goal={goal}
          />
        </Map>
      </div>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDVbQIZYWFU5zfuxRW1Ogt-9GAnmuznuwc',
})(withRouter(DetailsPage))
