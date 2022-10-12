import React, { useState, useEffect } from 'react';

import { getTruckList } from '../../api';

import './TruckMetaDataLayout.css';

import { Col, Row } from 'antd';

import { TruckMetaData } from '../TruckMetaData/TruckMetaData';

export const TruckMetaDataLayout: React.FC = () => {
    const [trucks, setTruck] = useState([]);

    useEffect(() => {
        getTruckList().then((data: any) => {
            setTruck(data);
        }).catch(() => { })
    }, [])

    return (
        <Row>
            <Col className='truck-meta-data'>
                <TruckMetaData data={trucks} />
            </Col>
        </Row>
    )
}
