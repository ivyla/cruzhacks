import React, { useState } from 'react'
import { Layout } from 'antd'
import Radar from 'radar-sdk-js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom'

import Header from './components/Header'
import Sider from './components/Sider'

import HomePage from './components/HomePage'
import MapPage from './components/MapPage'
import AboutPage from './components/AboutPage'
import LogInPage from './components/LogInPage'
import DetailsPage from './components/DetailsPage'

const { Content, Footer } = Layout

// Radar.trackOnce((status, location, user, events) => {
//   if (status === Radar.STATUS.SUCCESS) {
//     for (const geofence in user.geofences) {
//       if (geofence.tag === 'stadium') {
//         // do something
//       }
//     }
//   }
// })

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
                <MapPage setCollapse={setCollapse} />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/login">
                <LogInPage />
              </Route>
              <Route
                path="/details"
                render={({ match }) => <DetailsPage match={match} />}
              ></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
