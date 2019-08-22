import React from 'react';

const HeaderPresenter = () => {
  return (
    <header className="ant-layout-header">
      <div
        className="logo"
        style={{
          width: '120px',
          height: '31px',
          background: 'rgba(255, 255, 255, 0.2)',
          margin: '16px 24px 16px 0',
          float: 'left'
        }}
      />
      <ul
        className="ant-menu ant-menu-dark ant-menu-root ant-menu-horizontal"
        role="menu"
        style={{ lineHeight: '64px' }}
      >
        <li className="ant-menu-item ant-menu-item-selected" role="menuitem">
          nav 1
        </li>
        <li className="ant-menu-item" role="menuitem">
          nav 1
        </li>
        <li className="ant-menu-item" role="menuitem">
          nav 1
        </li>
      </ul>
    </header>
  );
};

const styles = {
  header: {
    height: 64,
    borderBottom: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec'
  }
};

export default HeaderPresenter;
