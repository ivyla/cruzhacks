import React from 'react'
import { withRouter } from 'react-router-dom'
import jwt from 'jsonwebtoken'

const DetailsPage = props => {
  const search = props.location.search
  const token = search.substr(1)
  const decoded = jwt.verify(token, 'secwet')

  const { title, description } = decoded
  // let { token } = props.match.jwt
  // const decoded = jwt.verify(token, 'secwet')
  // console.log(decoded)
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default withRouter(DetailsPage)
