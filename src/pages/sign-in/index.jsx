import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react'
import AuthContext from '../../contexts/auth/auth-context'
import { setJwt } from '../../libs/utils/localStorage'

import { signIn } from "../../services/auth"

import '../../css/signinStyle.css'

export default function SignIn() {
  const {user, setUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const handleSignIn = async () => {
    try {
      const data = form.getFieldValue();
      const dataCallAPI = {
        "email": data.email,
        "password": data.password
      }
      console.log("AloAlo123: ", dataCallAPI);
      const dataReturn = await signIn(dataCallAPI);
      const dataUser = dataReturn.data

      const status = dataUser.status;
      const token = dataUser.token;
      const userSignin = {
        "id": dataUser.data.user.id,
        "email": dataUser.data.user.email,
        "name": dataUser.data.user.name,
        "phone": dataUser.data.user.phone,
        "address": dataUser.data.user.address 
      }

      console.log("API Response: ", dataUser);
      console.log("Status: ", status);
      console.log("Token: ", token);
      console.log("Data user: ", userSignin);
      
      if (dataUser.status == "success")
      {
        setUser(userSignin);
        setJwt(token);
        navigate("/home");
      }

      form.submit();

    } catch (error) {
      console.log("Error: ", error)
    }

  };

  const [form] = Form.useForm();

  return (
    <div className="signin">
      <div className="title-signin">
        Đăng nhập
      </div>
      <Form form={form} name="normal_signin" className="signin-form"
        labelCol={{ span: 8, }}
        wrapperCol={{ span: 16, }}
        style={{ maxWidth: 600, }}
        initialValues={{ remember: true, }}
        onFinish={onFinish}
      >
        <Form.Item label="Email" name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email" />
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

        <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="signin-form-forgot" href="# ">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
          <Button type="primary" htmlType="submit" className="signin-form-button" onClick={handleSignIn}>
            Log in
          </Button>
          Or <a href="/sign-up">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}

