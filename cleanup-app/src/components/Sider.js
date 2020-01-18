import React from 'react'
import { Layout, Menu, Icon } from 'antd'

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
        <Menu.Item key="1">
          <Icon type="user" />
          <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          <span>nav 1</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export default Sider
