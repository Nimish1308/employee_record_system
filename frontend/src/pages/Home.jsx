import React from 'react'
import Records from '../components/Record_Section/Records'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Details from '../components/Details_Section/Details';
import Update from '../components/Update_Section/Update';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Home = () => {
    const URL = process.env.REACT_APP_BACKEND_API_URL;


    //Fetch All Employee Records
    const [records, setRecords] = useState([]);
    const getRecord = async () => {
        try {
            const res = await axios.get(`${URL}/find`)
            const store = res.data;
            setRecords(store);
            setFilter(store);
            console.log("All Records Fetched Successfully");

        } catch (error) {
            console.error("Failed To Fetch All Records");

        }
    }

    const [input, setInput] = useState({
        name: "",
        age: "",
        gender: "",
        field: "",
        description: "",
        photo: ""
    })

    const handleChange = (e) => {
        const { name, files } = e.target;
        if (name == "photo") {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = () => {
                setInput((prev) => ({
                    ...prev,
                    photo: reader.result
                }))
            }
            reader.readAsDataURL(file)
        }
        else {
            setInput((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
            }))
        }
    }

    //Create Employee Record
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${URL}/create`, input);
            toast.success("Employee Record Created");
            console.log("Employee Record Created");
            getRecord();
        } catch (error) {
            toast.error("Record Creation Failed")
        }
    }



    //Delete Employee Records
    const handleDeleteRecord = async (id) => {
        try {
            const res = await axios.delete(`${URL}/delete/${id}`);
            toast.success("Employee Record Deleted");
            console.log("Employee Record Deleted");
            getRecord();
        } catch (error) {
            toast.error("Failed To Delete Record")
        }
    }

    //Filter Record
    const [btnFilter, setFilter] = useState([]);

    const getFilter = (cat) => {
        try {
            const res = records.filter((item) => item.field === cat);
            setFilter(res);
        } catch (error) {
            console.error(error);

        }
    }

    useEffect(() => {
        getRecord();
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Records records={records} input={input} setFilter={setFilter} setInput={setInput} handleChange={handleChange} 
                handleSubmit={handleSubmit} handleDeleteRecord={handleDeleteRecord} getFilter={getFilter} btnFilter={btnFilter}/>} />
                <Route path='/details/:id' element={<Details URL={URL} />} />
                <Route path='/update/:id' element={<Update URL={URL} input={input} setInput={setInput} handleChange={handleChange} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Home
