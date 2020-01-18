import React, { useState } from 'react'
import { Layout } from 'antd'
import Radar from 'radar-sdk-js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Sider from './components/Sider'

import HomePage from './components/HomePage'
import MapPage from './components/MapPage'
import AboutPage from './components/AboutPage'

const { Content, Footer } = Layout

Radar.trackOnce((status, location, user, events) => {
  if (status === Radar.STATUS.SUCCESS) {
    for (const geofence in user.geofences) {
      if (geofence.tag === 'stadium') {
        // do something
      }
    }
  }
})

const App = () => {
  const [isCollapse, setCollapse] = useState(true)
  return (
    <Router>
      <Layout className="layout">
        <Sider isCollapse={isCollapse} setCollapse={setCollapse}></Sider>
        <Layout>
          <Header
            className="header"
            isCollapse={isCollapse}
            setCollapse={setCollapse}
          ></Header>
          <Content className="content">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/map">
                <MapPage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
            </Switch>
          </Content>
          <Footer className="footer"></Footer>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
