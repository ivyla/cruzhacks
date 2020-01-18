import React, { useState } from 'react'
import { Layout } from 'antd'

import Header from './components/Header'
import Sider from './components/Sider'
import Radar from 'radar-sdk-js'

const { Content, Footer } = Layout

// ALL JAVASCRIPT CODE

const App = () => {
  const [isCollapse, setCollapse] = useState(true)
  return (

    <script src="https://js.radar.io/v1.1.0/radar.min.js" integrity="sha384-9gzMIZTQDnuwordlQUv+j9r2TDNLAaKXhSk+p/1jZV0tlnDQ8Bu6YVmTbLIG+dRg" crossorigin="anonymous"></script>

    <script type="text/javascript">
      Radar.initialize(publishableKey);
      Radar.trackOnce(function(status, location, user, events) {
        if (status === Radar.STATUS.SUCCESS) {
          if (user.place.chain.slug === 'walmart') {
            // do something
          }
        }
      });
    </script>

    <Layout className="layout">
      <Sider isCollapse={isCollapse}></Sider>
      <Layout>
        <Header className="header" setCollapse={setCollapse}></Header>
        <Content className="content"></Content>
        <Footer className="footer"></Footer>
      </Layout>
    </Layout>
  )
}

export default App
