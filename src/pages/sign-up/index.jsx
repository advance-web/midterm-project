import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
<<<<<<< HEAD

import '../../css/signupStyle.css'

export default function SignUp() {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className="signup">
            <div className="title-signup">
                Đăng ký
            </div>
            <Form name="normal_signup" className="signup-form"
                labelCol={{ span: 8, }}
                wrapperCol={{ span: 16, }}
                style={{ maxWidth: 600, }}
                initialValues={{ remember: true, }}
                onFinish={onFinish}
            >
                <Form.Item label="Fullname" name="fullname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your fullname!',
                        },
                    ]}
                >
                    <Input size="large" placeholder="Fullname" />
                </Form.Item>

                <Form.Item label="Telephone" name="telephone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your telephone!',
                        },
                    ]}
                >
                    <Input size="large" placeholder="Telephone" type="tel"/>
                </Form.Item>

                <Form.Item label="Username" name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username" />
                </Form.Item>

                <Form.Item label="Password" name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input size="large" prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item label="Confirm Password" name="confirmPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Confirm Password!',
                        },
                    ]}
                >
                    <Input size="large" prefix={<LockOutlined className="site-form-item-icon" />}
                        type="confirmPassword" placeholder="Confirm Password" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
                    <Button type="primary" htmlType="submit" className="signup-form-button">
                        Sign up
                    </Button>
                    Or <a href="# ">log in now!</a>
                </Form.Item>
            </Form>
        </div>
    );

}

=======

import '../../css/signupStyle.css';

export default function SignUp() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="signup">
      <div className="title-signup">Đăng ký</div>
      <Form
        name="normal_signup"
        className="signup-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Fullname"
          name="fullname"
          rules={[
            {
              required: true,
              message: 'Please input your fullname!',
            },
          ]}
        >
          <Input size="large" placeholder="Fullname" />
        </Form.Item>

        <Form.Item
          label="Telephone"
          name="telephone"
          rules={[
            {
              required: true,
              message: 'Please input your telephone!',
            },
          ]}
        >
          <Input size="large" placeholder="Telephone" type="tel" />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: 'Please input your Confirm Password!',
            },
          ]}
        >
          <Input
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="confirmPassword"
            placeholder="Confirm Password"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="signup-form-button"
          >
            Sign up
          </Button>
          Or <a href="# ">log in now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}
>>>>>>> c10ef74a5324f9204c3006be7ba65a44d8a74b51
