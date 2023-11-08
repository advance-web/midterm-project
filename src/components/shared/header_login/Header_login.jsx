import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import styled from 'styled-components';
import { Button } from 'antd';
import { Navigate, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import MenuItem from 'antd/es/menu/MenuItem';


const { Header, Content, Footer } = Layout;



const App = () => {
    const useMyToken = () => {
        const { token } = theme.useToken();
        return {
            ...token,
            colorBg: '#FFFFFF',
            colorBgSecondary: '#F3F4F9',
            colorBgTertiary: '#E5E7EB',
            colorBgQuaternary: '#D1D5DB',
            colorBgContainer: "white",
        };
    }
    return (
        <Layout className="layout "
            style={{
                backgroundColor: "white",
            }}
        >
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',


                }}
            >
                <div className="demo-logo" />
                <Menu
                    className='menu'
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['0']}
                    style={{
                        flex: "auto",
                        minWidth: 0,
                        justifyContent: 'flex-end',
                    }}
                // items={[
                //     {
                //         key: "1", label:

                //             "Home"


                //         ,
                //     },
                //     { key: "2", label: "User" },
                //     { key: "3", label: "MyCV" },

                // ]}

                >
                    
                    <Menu.Item key="1">
                        <Link to="/home">Home</Link> {/* Use Link to navigate */}
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/user-profile">User</Link> {/* Use Link to navigate */}
                    </Menu.Item>
                    <MenuItem key="3" onClick={e => {
                        e.preventDefault();
                    }}>
                        <Button onClick={(e) => {
                            e.stopPropagation(); //
                        }}>
                            <Link to="/">Đăng xuất</Link> {/* Use Link to navigate */}
                        </Button>
                    </MenuItem>
                </Menu >

            </Header>


        </Layout>
    );
};
export default App;