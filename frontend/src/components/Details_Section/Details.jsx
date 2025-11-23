import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router'

const Details = () => {
  return (
    <>
      <div className="card mb-3 container" id='details_body'>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
              alt="Trendy Pants and Shoes"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title" style={{textAlign:'center'}}>Employee Details</h1>
              <hr />
              <h3 className="card-title">Employee Name:</h3>
              <hr />
              <h3 className="card-title">Employee Age:</h3>
              <hr />
              <h3 className="card-title">Employee Gender:</h3>
              <hr />
               <h3 className="card-title">Employee Field:</h3>
               <hr />
                <h3 className="card-title">Employee Description:</h3>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
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
