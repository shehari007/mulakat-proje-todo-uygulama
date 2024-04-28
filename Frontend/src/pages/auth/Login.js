import { Flex, Input, Form, Button, Card, Space, Typography } from 'antd'
import Link from 'antd/es/typography/Link'
import React from 'react'
import AuthService from '../../utils/AuthService/AuthService';

const { Text } = Typography;

const Login = () => {

  const handleOnSubmt = async (values) => {
    await AuthService.Login(values);
  }

  return (
    <>
      <Flex align='center' justify='centrer' vertical style={{ marginTop: '10vh' }}>
        <Card
          title={'LOGIN'}
          style={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            marginTop: '20vh'
          }}
        >
          <Form
            onFinish={handleOnSubmt}
            layout='vertical'
            style={{ width: '400px' }}
          >

            <Form.Item label="Username" name="username"
              rules={[
                {
                  required: true,
                  message: 'please enter username',
                },
              ]}
            >
              <Input placeholder='enter username' size='large' />
            </Form.Item>

            <Form.Item label="Password" name="password"
              rules={[
                {
                  required: true,
                  message: 'please enter your password'
                },
              ]}
            >
              <Input.Password placeholder='enter password' size='large' />
            </Form.Item>

            <Form.Item>
              <Space direction='vertical' style={{ width: '100%' }}>
                <Button type="primary" size="large" htmlType="submit" style={{ width: '100%' }}>
                  Login
                </Button>
                <Text>You don't have an account? <Link href="/register">Register!</Link> </Text>
              </Space>
            </Form.Item>

          </Form>
        </Card>
      </Flex>
    </>
  )
}

export default Login
