import React, { useEffect } from 'react';
import { Container, } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Auth from './components/Auth/Auth';
import Profile from './pages/Profile';
import AdminLogIn from './components/admin/AdminLogin';
import { getItem } from './actions/item';
import { useSelector, useDispatch } from 'react-redux';
import { getOrder } from './actions/order';
import Payment from './pages/Payment';
import Order from './pages/Order';
import Address from './pages/Address';
import Admin from './pages/Admin';
import Loader from './pages/Loader';

const App = () => {
    const allItems = useSelector((state) => state.item.items);
    const isUser = useSelector((state) => state.auth.authData);

    // console.log("A:",allItems);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getItem());
        if (isUser)
            dispatch(getOrder());
    }, [dispatch])

    return (
        <>
            <Loader />
            <BrowserRouter>
                <Container maxWidth="xl">
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={allItems && <Home pizza={allItems.items} />} />
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/admin" element={<AdminLogIn />} />
                        <Route path="/admin/dashboard" element={<Admin pizza={allItems.items} />} />
                        <Route path="/order" element={<Order />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/address" element={<Address />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </>
    )
}

export default App