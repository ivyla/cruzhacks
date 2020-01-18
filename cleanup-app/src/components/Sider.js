import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

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
        <img src="https://img.icons8.com/cotton/128/000000/earth-care--v1.png"></img>
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
          <Link to="/map">
            <h1>MAP</h1>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export default Sider
