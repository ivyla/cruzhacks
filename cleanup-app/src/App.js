import React, { useState } from 'react'
import { Layout } from 'antd'
import Radar from 'radar-sdk-js'

import Header from './components/Header'
import Sider from './components/Sider'

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
    <Layout className="layout">
      <Sider isCollapse={isCollapse}></Sider>
      <Layout>
        <Header
          className="header"
          isCollapse={isCollapse}
          setCollapse={setCollapse}
        ></Header>
        <Content className="content"></Content>
        <Footer className="footer"></Footer>
      </Layout>
    </Layout>
  )
}

export default App
