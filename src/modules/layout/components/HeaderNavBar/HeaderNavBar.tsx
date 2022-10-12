import React, { useState } from 'react';

import { Layout, } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import './HeaderNavBar.css';

const { Header, Content } = Layout;

export const HeaderNavBar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <Header className="header" style={{ padding: 0 }}>
                {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                })} */}
                <div className="logo" >
                    <span className='logo-text'>TFSaaS</span>
                </div>
            </Header>
        </div>
    )
}