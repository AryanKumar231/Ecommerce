import React, { Suspense, lazy, useEffect } from 'react'
import { ErrorBoundary } from "react-error-boundary"
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom"

import Loader from './components/commons/Loader'
import ErrorFallback from './components/ErrorFallBack'
import { useSelector } from 'react-redux'

const Footer = lazy(() => import('./components/commons/Footer'))
const Navbar = lazy(() => import('./components/commons/Navbar'))
const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const ProductDetail = lazy(() => import("./pages/ProductDetail"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const Profile = lazy(() => import('./pages/Profile'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Cart = lazy(() => import("./pages/Cart"))
const Checkout = lazy(() => import("./pages/Checkout"))

const App = () => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <><Navbar /><Outlet /><Footer /></>,
            children: [
                { path: "/", element: <Home /> },
                { path: "/shop", element: <Shop /> },
                { path: "/about", element: <About /> },
                { path: "/contact", element: <Contact /> },
                { path: '/shop/tshirt', element: <ProductDetail /> },
                { path: '/profile', element: (isAuthenticated ? <Profile /> : <Navigate to='/login' />) },
                { path: '/cart', element: <Cart /> },
                { path: '/cart/shipping/payment', element: <Checkout /> }
            ]
        },
        { path: '/login', element: (!isAuthenticated ? <Login /> : <Navigate to='/profile' />) },
        { path: '/register', element: (!isAuthenticated ? <Register /> : <Navigate to='/profile' />) }
    ]);

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loader />}>
                <RouterProvider router={router} />
            </Suspense>
        </ErrorBoundary>
    )
}

export default App
