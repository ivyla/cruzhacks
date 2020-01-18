import React from 'react'
import { Button, Layout, Menu } from 'antd'

const Header = props => {
  return (
    <Layout.Header className="header">
      <Button
        onClick={() => props.setCollapse(!props.isCollapse)}
        className="sider-toggle"
        icon={props.isCollapse ? 'menu-unfold' : 'menu-fold'}
      ></Button>
      <div className="logo">
        <h1>CLEAN THIS PLACE</h1>
        <img src="https://img.icons8.com/cotton/64/000000/earth-care--v1.png"></img>
      </div>
    </Layout.Header>
  )
}

export default Header
