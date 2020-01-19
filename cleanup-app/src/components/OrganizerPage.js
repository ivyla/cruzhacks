import React, { useState } from 'react'
import { Button, Input } from 'antd'

const OrganizerPage = props => {
  const [t, setT] = useState('')
  const [d, setD] = useState('')
  const [g, setG] = useState(0)

  const pos = { lat: null, lng: null }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('curr lat', position.coords.latitude)
      pos.lat = position.coords.latitude
      pos.lng = position.coords.longitude
    })
  }

  const handleClick = () => {
    props.markers.markers.push({
      latitude: pos.lat,
      longitude: pos.lng,
      title: 'A Beach',
      description: 'This needs cleaning!',
      progress: 0.0,
      goal: 40.0,
    })
    console.log(props.markers)
  }

  return (
    <div>
      <h1>ORGANIZER PAGE</h1>
      <Input placeholder="title" onChange={val => console.log(val)}></Input>
      <Input placeholder="description" onChange={val => setD(val)}></Input>
      <Input placeholder="goal" onChange={val => setG(val)}></Input>
      <Button onClick={handleClick}>Submit</Button>
    </div>
  )
}

export default OrganizerPage
