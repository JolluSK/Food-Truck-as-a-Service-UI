import React from 'react';

import { Layout } from 'antd';

import './PrimaryLayout.css'

import { Outlet } from "react-router-dom";

import { HeaderNavBar } from '../HeaderNavBar/HeaderNavBar';
import { SideNavBar } from '../SideNavBar/SideNavBar';

const { Content } = Layout

export const PrimaryLayout: React.FC = () => {
    return (
        <Layout className='primary-layout'>
            <HeaderNavBar />
            <Layout>
                <SideNavBar />
                <Content className='container'>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}