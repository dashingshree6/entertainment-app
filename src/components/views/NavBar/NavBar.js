import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
const Logo = require('../../../assets/images/Logo.png');

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="menu__logo">
        <a href="/"><img src='data:image/png;base64,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' alt="Logo" style={{ width: '100%', marginTop: '-5px' }} /></a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar