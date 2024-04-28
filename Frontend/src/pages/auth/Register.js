import { Flex, Input, Form, Button, Card, Space, Typography } from 'antd'
import Link from 'antd/es/typography/Link';
import React from 'react'
import AuthService from '../../utils/AuthService/AuthService';

const { Text } = Typography;
const Register = () => {

  const [form] = Form.useForm();

  const handleOnSubmit = async (values) => {
    const newValues = { ...values };
    delete newValues.cfmPassword;
    await AuthService.Register(newValues);
  }


  const validatePassword = async (_, value) => {
    const password = form.getFieldValue('password');
    if (value && value !== password) {
      throw new Error('The passwords do not match');
    }
  };

  return (
    <>

      <Flex align='center' justify='centrer' vertical style={{ marginTop: '10vh' }}>
        <Card
          title={'REGISTER NEW USER'}
          style={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            marginTop: '20vh'
          }}
        >
          <Form
            form={form}
            onFinish={handleOnSubmit}
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

            <Form.Item label="Confirm Password" name="cfmPassword"
              rules={[
                {
                  required: true,
                  message: 'please enter your password'
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    return validatePassword(_, value);
                  },
                }),
              ]}
              dependencies={['password']}
            >
              <Input.Password placeholder='confirm password' size='large' />
            </Form.Item>

            <Form.Item>
              <Space direction='vertical' style={{ width: '100%' }}>
                <Button type="primary" size="large" htmlType="submit" style={{ width: '100%' }}>
                  Register
                </Button>
                <Text>Already have an account? <Link href="/login">Login!</Link> </Text>
              </Space>
            </Form.Item>

          </Form>
        </Card>
      </Flex>
    </>
  )
}

export default Register
