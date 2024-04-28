import React from 'react';
import { Layout, theme } from 'antd';
import LayoutHeader from './LayoutHeader';

const { Content } = Layout;

const MainLayout = ({ children }) => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: '100vh' }}>
      <Layout style={{
        overflow: 'auto',

      }}>
        <LayoutHeader />
        <Content
          style={{
            margin: '100px 200px 0',
            flex: '1 0 auto',
          }}
        >
          <div
            style={{
              padding: 15,
              minHeight: '100%',
              // background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;