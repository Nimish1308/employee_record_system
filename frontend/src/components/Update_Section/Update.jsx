import React from 'react'
import Emp_Form from '../Emp_Form'
import Update_Form_Buttons from './Update_Form_Buttons'
import { useParams } from 'react-router'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Update_Form_Image from './Update_Form_Image'

const Update = ({ URL, input, setInput, handleChange }) => {
  const { id } = useParams();
  //Update Employee Details
  // const [input, setInput] = useState({
  //   name: "",
  //   age: "",
  //   gender: "",
  //   field: "",
  //   description: ""
  // })

  const [image, setImage] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${URL}/update/${id}`, input);
      toast.success("Employee Details Updated");
      console.log("Employee Details Updated");
      getRecord();
    } catch (error) {
      toast.error("Failed To fetch record")
    }
  }

  const getRecord = async () => {
    try {
      const res = await axios.get(`${URL}/findbyid/${id}`);
      setInput({
        name: res.data.name,
        age: res.data.age,
        gender: res.data.gender,
        field: res.data.field,
        description: res.data.description,
      })
      setImage(res.data);
    } catch (error) {
      console.error(error);

    }
  }

  useEffect(() => {
    getRecord();
  }, [])
  return (
    <>
      <Emp_Form input={input} handleChange={handleChange} handleSubmit={handleSubmit}>
        <Update_Form_Image image={image} />
        <br />
        <Update_Form_Buttons />
      </Emp_Form>
    </>
  )
}

export default Update
