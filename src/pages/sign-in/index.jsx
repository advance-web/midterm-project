import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react'
import AuthContext from '../../contexts/auth/auth-context'
import { setJwt } from '../../libs/utils/localStorage'

import { signIn } from "../../services/auth"

import '../../css/signinStyle.css'
import SubmitButton from '../../components/ui/SubmitButton';

export default function SignIn() {
  const {setUser} = useContext(AuthContext);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

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
      setLoading(true)
      const dataReturn = await signIn(dataCallAPI);
      setLoading(false)
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
      setError('Sai tài khoản hoặc mật khẩu')
      setLoading(false)
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

        {error && <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
          <Typography.Text type="danger">{error}</Typography.Text>
        </Form.Item>}

        <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
          <SubmitButton form={form} type="primary" htmlType="submit" className="signin-form-button" onClick={handleSignIn} loading={loading}>
            Log in
          </SubmitButton>
          Or <Link to="/sign-up">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

