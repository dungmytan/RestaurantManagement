import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import login from "./login.module.scss"
import classNames from "classnames/bind";
const CX = classNames.bind(login);

function Login() {
    return (
        <div className={CX('container')}>
            <p>Log In</p>
            <Input placeholder="Email" prefix={<UserOutlined />} />
            <Input.Password placeholder="Password" />
            <button>Log in</button>
        </div>);
}

export default Login;