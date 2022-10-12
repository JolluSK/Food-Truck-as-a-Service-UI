import { Routes, Route, Router } from 'react-router-dom';

import { DashboardRoutes } from '../modules/layout'
import { TruckRoutes } from '../modules/truck-details'
import { TruckAdminRoutes } from '../modules/admin'

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<DashboardRoutes />}>
                {TruckRoutes()}
                {TruckAdminRoutes()}
            </Route>
        </Routes>
    )
}