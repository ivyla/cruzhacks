import React, { useState } from 'react'
import { Layout } from 'antd'
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
import OrganizerPage from './components/OrganizerPage'
import LogInPage from './components/LogInPage'
import DetailsPage from './components/DetailsPage'
import AboutPage from './components/AboutPage'

import markersJSON from './components/database.json'

const { Content } = Layout

const App = () => {
  const [isCollapse, setCollapse] = useState(true)
  const [markers, setMarkers] = useState(markersJSON)
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
                <MapPage setCollapse={setCollapse} markers={markers} />
              </Route>
              <Route path="/organizer">
                <OrganizerPage markers={markers} setMarkers={setMarkers} />
              </Route>
              <Route path="/login">
                <LogInPage />
              </Route>
              <Route path="/about">
                <AboutPage />
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
