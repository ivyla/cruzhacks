import React, { useState } from 'react'
import { Layout } from 'antd'

import Header from './components/Header'
import Sider from './components/Sider'

const { Content, Footer } = Layout

// ALL JAVASCRIPT CODE

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
