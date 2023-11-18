import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

import { signUp } from "../../services/auth"

import React from 'react';

import '../../css/signupStyle.css'

export default function SignUp() {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const handleSignUp = () => {
        const data = form.getFieldValue();
        const dataCallAPI = {
            "name": data.fullname,
            "email": data.email,
            "password": data.password,
            "confirmPassword": data.confirmPassword,
            "phone": data.telephone,
            "address": data.address
        }
        console.log("AloAlo123: ", dataCallAPI);
        const dataReturn = signUp(dataCallAPI);
        console.log("API Response: ", dataReturn);
        form.submit();
    };

    const [form] = Form.useForm();

    return (
        <div className="signup">
            <div className="title-signup">
                Đăng ký
            </div>
            <Form form={form} name="normal_signup" className="signup-form"
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
                    <Input size="large" placeholder="Telephone" type="tel" />
                </Form.Item>

                <Form.Item label="Address" name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your address!',
                        },
                    ]}
                >
                    <Input size="large" placeholder="Address" />
                </Form.Item>

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

                <Form.Item label="Confirm Password" name="confirmPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Confirm Password!',
                        },
                        {
                            validator: (_, value) => {
                                if (!value || form.getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords do not match!'));
                            },
                        },
                    ]}
                >
                    <Input size="large" prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password" placeholder="Confirm Password" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
                    <Button type="primary" htmlType="submit" className="signup-form-button" onClick={handleSignUp}>
                        Sign up
                    </Button>
                    Or <a href="# ">log in now!</a>
                </Form.Item>
            </Form>
        </div>
    );

}

