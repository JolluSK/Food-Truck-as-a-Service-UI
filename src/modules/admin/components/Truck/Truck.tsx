import React from 'react';

import { Layout } from 'antd';
import './Truck.css';

import { TruckList } from '../TruckList/TruckList'

export const TruckLayout: React.FC = () => {

    return (
        <Layout>
            <TruckList />
        </Layout>
    )
}