import React, { useState, useEffect } from 'react';
import type { ColumnsType } from 'antd/es/table';

import { Col, Row, Space, Table, Button, Modal, Form, Input, DatePicker } from 'antd';
import moment from "moment";

import { addTruck as addTruckService, getTruckList, updateTruck as updateTruckService } from '../../api';

import './TruckList.css';

interface DataType {
    name: string;
    date: string;
}

export const TruckList: React.FC = () => {

    const [trucks, setTruck] = useState([]);
    const [open, setOpen] = useState(false);
    const [actionType, setActionType] = useState('add');
    const [id, setId] = useState('');
    const [form] = Form.useForm();

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button onClick={() => { onModelEditTruck(record) }}>Edit</button>
                </Space>
            ),
        },
    ]

    const addNewTruck = (payload: any) => {
        addTruckService(payload).then((data: any) => {
            setActionType('');
            fetchTruckData();
        }).catch((error) => {
            setActionType('');
            alert("Error while adding new Truck")
        })
    };

    const updateTruck = (payload: any) => {
        console.info(payload)
        updateTruckService(id, payload).then((data: any) => {
            setActionType('');
            fetchTruckData();
        }).catch((error) => {
            setActionType('');
            alert("Error while adding new Truck")
        })
    };

    const onAddTruck = (data: any) => {
        if (actionType == 'add')
            addNewTruck(data);
        if (actionType == 'edit')
            updateTruck(data)
        setOpen(false);
    };

    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        setOpen(false);
        setActionType('');
    };

    const fetchTruckData = () => {
        getTruckList().then((data: any) => {
            setTruck(data);
        }).catch(() => { })
    };

    const onModelAddTruck = () => {
        setActionType('add');
        setOpen(true);
    };

    const onModelEditTruck = (data: any) => {
        setActionType('edit');
        setId(data._id)
        form.setFieldsValue({
            name: data.name,
            date: moment(data.date)
        })
        setOpen(true);
    }

    useEffect(() => {
        fetchTruckData();
    }, [])

    return (
        <>
            <Row>
                <Col span={24}>
                    <div style={{ marginBottom: 16 }}>
                        <Button type="primary" onClick={onModelAddTruck}>
                            Add a Truck
                        </Button>
                    </div>
                </Col>
                <Col span={24}>
                    <Table columns={columns} dataSource={trucks} />
                </Col>
            </Row>

            <Modal open={open} closable={false} footer={null} >
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    onFinish={onAddTruck}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'name' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Date"
                        name="date"
                        rules={[{ required: true, message: 'Date!' }]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}