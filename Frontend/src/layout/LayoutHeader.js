import React from 'react'
import { Layout, theme, Space, Typography } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons';
import AuthService from '../utils/AuthService/AuthService';

const { Link } = Typography;
const { Header } = Layout;
const LayoutHeader = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header
            style={{
                padding: 0,
                background: colorBgContainer,
                display: 'flex',
                justifyContent: 'end',
                alignContent: 'end',
                alignItems: 'end'
            }}
        >
            <Space size="middle" align='end' style={{ marginRight: '30px' }} >
                <Link type='danger' strong onClick={() => AuthService.LogOut()}><PoweroffOutlined /> Logout</Link>
            </Space>
        </Header>
    )
}

export default LayoutHeader;
