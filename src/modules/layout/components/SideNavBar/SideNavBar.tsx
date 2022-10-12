import React, { useState } from 'react';

import { CarOutlined, FileOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import './SideNavBar.css';

const { Sider } = Layout;

export const SideNavBar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider trigger={null} collapsible collapsed={collapsed} className="sider-layout">
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <CarOutlined />,
                        label: (
                            <a href="/truck" rel="noopener noreferrer">
                                Truck
                            </a>
                        ),
                    },
                    {
                        key: '2',
                        icon: <FileOutlined />,
                        label: (
                            <a href="/truck-details" rel="noopener noreferrer">
                                Truck Schedule
                            </a>
                        ),
                    }
                ]}
            />
        </Sider>
    )
}