import React from 'react'
import Records from '../components/Record_Section/Records'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from '../components/Details_Section/Details';
import Update from '../components/Update_Section/Update';

const Home = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Records />} />
                <Route path='/details' element={<Details />} />
                <Route path='/update' element={<Update />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Home
