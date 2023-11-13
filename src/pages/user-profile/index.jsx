import { useState } from 'react';
import { Card } from 'antd';
import { Button, Form, Input, Select } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const UserProfile = () => {
  const form = {
    username: 'Phùng Anh Khoa',
    email: 'khoa@gmail.com',
    phone: '03215465',
    residence: 'HCM City',
    gender: 'male',
  };
  const [formData, setFormData] = useState(form);
  console.log(formData);
  return (
    <>
      <Card
        style={{
          width: '50%',
          margin: 'auto',
        }}
        title="Thông tin cá nhân"
        size="small"
      >
        <Form
          {...formItemLayout}
          style={{
            width: '80%',
            margin: 'auto',
          }}
        >
          <Form.Item
            label="Họ tên"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input defaultValue={formData.username} />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input defaultValue={formData.email} />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input defaultValue={formData.phone} />
          </Form.Item>

          <Form.Item
            name="residence"
            label="Quê quán"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input defaultValue={formData.residence} />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Giới tính"
            rules={[
              {
                required: true,
                message: 'Please select gender!',
              },
            ]}
          >
            <Select
              defaultValue={formData.gender}
              placeholder="select your gender"
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Xác nhận chỉnh sửa
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default UserProfile;
