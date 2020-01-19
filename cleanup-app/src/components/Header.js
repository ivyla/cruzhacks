import React from 'react'
import { Button, Layout } from 'antd'

import Logo from '../assets/images/logo143x83_tight.png'

const Header = props => {
  return (
    <Layout.Header className="header">
      <Button
        onClick={() => props.setCollapse(!props.isCollapse)}
        className="sider-toggle"
        icon={props.isCollapse ? 'menu-unfold' : 'menu-fold'}
      ></Button>
      <div className="logo">
        <h1>CLEAN THIS SPACE</h1>
        <img src={Logo}></img>
      </div>
    </Layout.Header>
  )
}

export default Header
