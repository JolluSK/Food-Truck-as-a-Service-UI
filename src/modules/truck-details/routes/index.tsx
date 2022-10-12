import React from 'react';

import { Route } from 'react-router-dom';

import { Truck } from '../components'

export const TruckRoutes = () => {
    return (
        <Route path="truck-details" element={<Truck />} />
    )
}