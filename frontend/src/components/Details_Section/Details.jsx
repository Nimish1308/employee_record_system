import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router'
import { toast } from 'react-toastify'

const Details = ({ URL }) => {
  const { id } = useParams();
  // //Find Employee details by id
  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    try {
      const res = await axios.get(`${URL}/findbyid/${id}`);
      const store = res.data;
      setDetails(store);
      toast.success("Employee Details Fetched");
      console.log("Employee Details Fetched");
    } catch (error) {
      toast.error("Failed To Fetch Details");

    }
  }


  useEffect(() => {
    getDetails();
  }, [])
  return (
    <>
      <div className="card mb-3 container" id='details_body'>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={details.photo || "https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"}
              style={{width:'100%'}}
              alt="Trendy Pants and Shoes"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title" style={{ textAlign: 'center' }}>Employee Details</h1>
              <hr />
              <h3 className="card-title">Employee Name: {details.name}</h3>
              <hr />
              <h3 className="card-title">Employee Age: {details.age}</h3>
              <hr />
              <h3 className="card-title">Employee Gender: {details.gender}</h3>
              <hr />
              <h3 className="card-title">Employee Field: {details.field}</h3>
              <hr />
              <h3 className="card-title">Employee Description:</h3>
              <p className="card-text">
                {details.description}
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>

              <NavLink to={`/`}><Button variant="primary" id="action_btn">Back</Button></NavLink>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
