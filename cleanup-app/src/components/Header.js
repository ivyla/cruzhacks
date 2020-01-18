import React from 'react'
import { Layout, Menu } from 'antd'

const Header = () => {
  return (
    <Layout.Header className="header">
      <div className="logo">
        <h1>CLEAN THIS PLACE</h1>
        <img src="https://img.icons8.com/cotton/64/000000/earth-care--v1.png"></img>
      </div>
      <div className="navbar">
        <Menu mode="horizontal">
          <Menu.Item>
            <h1>ABOUT</h1>
          </Menu.Item>
          <Menu.Item>
            <h1>OPEN CLEANUPS</h1>
          </Menu.Item>
          <Menu.Item>
            <h1>CONTACT</h1>
          </Menu.Item>
        </Menu>
      </div>
    </Layout.Header>
  )
}

export default Header
