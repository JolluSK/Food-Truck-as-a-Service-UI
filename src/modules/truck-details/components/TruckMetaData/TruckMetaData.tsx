import React, { useState, useEffect } from 'react';

import './TruckMetaData.css';

import { Card } from 'antd';

const { Meta } = Card;

type Props = {
    data: Array<any>
};

export const TruckMetaData: React.FC<Props> = ({ data }: any) => {
    console.info(data)
    return (
        <div>
            {
                data.map((truck: any) => {
                    return (
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://template77246.motopreview.com/mt-demo/77200/77246/mt-content/uploads/2019/01/mt-1732-location-img-1.jpg" />}
                        >
                            <Meta title={truck.name} description={truck.date} />
                        </Card>
                    )
                })
            }
        </div>
    )
}
