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
