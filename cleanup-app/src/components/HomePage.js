import React from 'react'
import Logo from '../assets/images/cleanup.png'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div class="wrapper">
      <div class="centered">
        <div class="yee-haw">
          <div class="flex">
            <h1 id="title-blurb">
              {' '}
              Crowdfund and organize environmental cleanups anywhere in the
              world.{' '}
            </h1>
            <h2 id="description">
              {' '}
              We're here to connect environmentally conscious donors and eager
              volunteers, to clean public places in our communities.{' '}
            </h2>
            <Button class="get-started" size="large">
              <Link to="/map">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
