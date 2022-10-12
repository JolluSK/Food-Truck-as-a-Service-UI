import React from 'react';

import { Route } from 'react-router-dom';

import { TruckLayout } from '../components'

export const TruckAdminRoutes = () => {
    return (
        <Route path="truck" element={<TruckLayout />} />
    )
}