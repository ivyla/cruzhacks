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
            <h1>
              {' '}
              <Icon type="home" /> Home{' '}
            </h1>
          </Link>
        </Menu.Item>
        <Menu.Item key="1" onClick={() => props.setCollapse(!props.isCollapse)}>
          <Link to="/about">
            <h1>
              {' '}
              <Icon type="team" /> About{' '}
            </h1>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => props.setCollapse(!props.isCollapse)}>
          <Link to="/map">
            <h1>
              {' '}
              <Icon type="pushpin" theme="filled" /> Map{' '}
            </h1>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export default Sider
