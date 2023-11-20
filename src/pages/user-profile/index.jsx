import { useState, useContext, useEffect } from "react";
import { Card } from "antd";
import { Button, Form, Input, Select } from "antd";

import AuthContext from "../../contexts/auth/auth-context";
import { getMe, updateProfile } from "../../services/auth";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  // const form = {
  //   username: "Phùng Anh Khoa",
  //   email: "khoa@gmail.com",
  //   phone: "03215465",
  //   residence: "HCM City",
  //   gender: "male",
  // };
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    phone: "",
  });
  console.log(formData);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getMe();
        const userData = response.data.data.data;
        setFormData(userData);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(formData);
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  return (
    <>
      <Card
        style={{
          width: "50%",
          margin: "auto",
        }}
        title="Thông tin cá nhân"
        size="small"
      >
        <Form
          {...formItemLayout}
          style={{
            width: "80%",
            margin: "auto",
          }}
          onFinish={handleUpdateProfile}
        >
          <Form.Item
            label="Họ tên"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }}
              placeholder={formData.name}
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              onChange={(e) => {
                setFormData({
                  ...formData,
                  phone: e.target.value,
                });
              }}
              placeholder={formData.phone}
            />
          </Form.Item>

          <Form.Item
            name="address"
            label="Quê quán"
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input
              onChange={(e) => {
                setFormData({
                  ...formData,
                  address: e.target.value,
                });
              }}
              placeholder={formData.address}
            />
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
