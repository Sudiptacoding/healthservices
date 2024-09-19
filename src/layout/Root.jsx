import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default Root;