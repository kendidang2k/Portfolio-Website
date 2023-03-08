import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loading from './components/atoms/Loading';
import Home from './pages/Home';
import Product from './pages/Product';

const mainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/product',
        element: <Product />
    }
])

const App: React.FC = () => {
    return (
        <>
            <RouterProvider router={mainRoute} />
        </>
    )
}
export default App;
