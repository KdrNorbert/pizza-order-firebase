import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import PreviousOrders from './routes/PreviousOrders';
import OrderPizza from './routes/OrderPizza';
import EditPizza from './routes/EditPizza';

const router = createBrowserRouter([
    {
        path: '/',
        element : <MainLayout />,
        children:[
            {
                path: '/',
                element: <PreviousOrders />,
            },
            {
                path: '/order-pizza',
                element: <OrderPizza />,
            },
            {
                path: '/edit-pizza/:pizzaId',
                element: <EditPizza />,
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
