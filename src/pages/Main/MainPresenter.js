import React from 'react';

import Header from '../../components/Header';

const MainPresenter = () => {
  const Footer = () => (
    <footer className="ant-layout-footer" style={{ textAlign: 'center' }}>
      Vote Component ©2019 Created by Peace Jung
    </footer>
  );

  return (
    <div className="" style={{ height: '100%' }}>
      <section className="layout ant-layout" style={{ height: '100%' }}>
        <Header />

        <main className="ant-layout-content" style={{ padding: '0px 50px' }}>
          <div className="ant-breadcrumb" style={{ margin: '16px 0px' }}>
            <span>
              <span className="ant-breadcrumb-link">Home</span>
              <span className="ant-breadcrumb-separator">/</span>
            </span>
            <span>
              <span className="ant-breadcrumb-link">List</span>
              <span className="ant-breadcrumb-separator">/</span>
            </span>
            <span>
              <span className="ant-breadcrumb-link">App</span>
              <span className="ant-breadcrumb-separator">/</span>
            </span>
          </div>
          <div
            style={{
              background: 'rgb(255, 255, 255)',
              padding: '24px',
              minHeight: '280px'
            }}
          >
            Content
          </div>
        </main>

        <Footer />
      </section>
    </div>
  );
};

export default MainPresenter;
