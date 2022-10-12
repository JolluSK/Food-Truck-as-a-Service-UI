import React from 'react';

import { Col, Row } from 'antd';

import './TruckWidget.css'

export const TruckWidget: React.FC = () => {
    return (
        <Row>
            <Col className='banner'>
                <Row>
                    <Col span={24} className='widget-layout'>
                        <h1 className="truck-text_304">Truck Locations</h1>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}