"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_ACCOUNT } from "@/constants";
import { toast } from "react-toastify";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = (values: any) => {
    setLoading(true);
    if (
      values.username === ADMIN_ACCOUNT.username &&
      values.password === ADMIN_ACCOUNT.password
    ) {
      setLoading(false);
      localStorage.setItem("isLoggedIn", "true");
      router.push("/admin");
    } else {
      setLoading(false);
      toast.warning("tk: admin, mk: password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        title="TRANG ĐĂNG NHẬP ADMIN"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tên người dùng!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Tên người dùng"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
