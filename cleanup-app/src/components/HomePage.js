import React from 'react'
import Logo from '../assets/images/cleanup.png'

const HomePage = () => {
  return (
    <div class="wrapper">
      <div class="centered">
        <div class="yee-haw">
          <h1 id="title-blurb">
            {' '}
            Crowdfund and organize environmental cleanups anywhere in the world.{' '}
          </h1>
          <h2 id="description">
            {' '}
            We're here to connect environmentally conscious donors and eager
            volunteers, to clean public places in our communities.{' '}
          </h2>
          <Button variant="success">Go to map</Button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
