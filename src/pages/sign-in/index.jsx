import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

<<<<<<< HEAD
import '../../css/signinStyle.css'

export default function SignIn() {

=======
import '../../css/signinStyle.css';

export default function SignIn() {
>>>>>>> c10ef74a5324f9204c3006be7ba65a44d8a74b51
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="signin">
<<<<<<< HEAD
      <div className="title-signin">
        Đăng nhập
      </div>
      <Form name="normal_signin" className="signin-form"
        labelCol={{ span: 8, }}
        wrapperCol={{ span: 16, }}
        style={{ maxWidth: 600, }}
        initialValues={{ remember: true, }}
        onFinish={onFinish}
      >
        <Form.Item label="Username" name="username"
=======
      <div className="title-signin">Đăng nhập</div>
      <Form
        name="normal_signin"
        className="signin-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
>>>>>>> c10ef74a5324f9204c3006be7ba65a44d8a74b51
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
<<<<<<< HEAD
          <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username" />
        </Form.Item>

        <Form.Item label="Password" name="password"
=======
          <Input
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
>>>>>>> c10ef74a5324f9204c3006be7ba65a44d8a74b51
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
<<<<<<< HEAD
          <Input size="large" prefix={<LockOutlined className="site-form-item-icon" />}
            type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
=======
          <Input
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
>>>>>>> c10ef74a5324f9204c3006be7ba65a44d8a74b51
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="signin-form-forgot" href="# ">
            Forgot password
          </a>
        </Form.Item>

<<<<<<< HEAD
        <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
          <Button type="primary" htmlType="submit" className="signin-form-button">
=======
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="signin-form-button"
          >
>>>>>>> c10ef74a5324f9204c3006be7ba65a44d8a74b51
            Log in
          </Button>
          Or <a href="# ">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
<<<<<<< HEAD

}

=======
}
>>>>>>> c10ef74a5324f9204c3006be7ba65a44d8a74b51
