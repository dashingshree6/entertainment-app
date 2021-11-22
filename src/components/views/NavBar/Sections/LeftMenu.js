import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="favorite">
        <a href="/favorite">Favorite</a>
      </Menu.Item>

      <Menu.Item key="favorite">
        <a href="/featured">Featured Today</a>
      </Menu.Item>

      <Menu.Item key="favorite">
        <a href="/fan">Fan Favorites </a>
      </Menu.Item>

      <Menu.Item key="favorite">
        <a href="/coming">Coming Soon</a>
      </Menu.Item>

      <Menu.Item key="favorite">
        <a href="/top">Top Box Office</a>
      </Menu.Item>

      <Menu.Item key="favorite">
        <a href="/explore">More to explore</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu