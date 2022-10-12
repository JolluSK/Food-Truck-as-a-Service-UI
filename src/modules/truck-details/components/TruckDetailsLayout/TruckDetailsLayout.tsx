import React from 'react';

import { Layout } from 'antd';

import './TruckDetailsLayout.css'

import { TruckWidget } from '../TruckWidget/TruckWidget'
import { TruckMetaDataLayout } from '../TruckMetaDataLayout/TruckMetaDataLayout'

export const TruckDetailsLayout: React.FC = () => {
    return (
        <Layout>
            <TruckWidget />
            <TruckMetaDataLayout />
        </Layout>
    )
}
