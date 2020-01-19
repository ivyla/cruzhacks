import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/logo143x83_tight.png'

const Sider = props => {
  return (
    <Layout.Sider
      className="sider"
      trigger={null}
      collapsible
      collapsedWidth={0}
      collapsed={props.isCollapse}
    >
      <div className="sider-logo">
        <img src={Logo}></img>
      </div>
      <Menu>
        <Menu.Item key="0" onClick={() => props.setCollapse(!props.isCollapse)}>
          <Link to="/">
            <h1>HOME</h1>
          </Link>
        </Menu.Item>
        <Menu.Item key="1" onClick={() => props.setCollapse(!props.isCollapse)}>
          <Link to="/about">
            <h1>ABOUT</h1>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => props.setCollapse(!props.isCollapse)}>
          <Link to="/organizer">
            <h1>ORGANIZER</h1>
          </Link>
        </Menu.Item>
        <Menu.Item key="3" onClick={() => props.setCollapse(!props.isCollapse)}>
          <Link to="/map">
            <h1>MAP</h1>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export default Sider
