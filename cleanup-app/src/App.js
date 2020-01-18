import React from 'react'
import { Layout } from 'antd'

import Header from './components/Header'

const { Content, Footer } = Layout

const App = () => {
  return (
    <Layout className="layout">
      <Header className="header"></Header>
      <Content className="content"></Content>
      <Footer className="footer"></Footer>
    </Layout>
  )
}

export default App
