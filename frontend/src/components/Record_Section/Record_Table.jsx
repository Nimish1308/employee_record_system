import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router'

const Record_Table = () => {
    return (
        <>
            <table className="table align-middle mb-0 bg-white container" id='table_body'>
                <thead className="bg-light">
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Field</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{
                                        width: "45px",
                                        height: "45px",
                                    }}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">John Doe</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        <td>Senior</td>
                        <td>
                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                Edit
                            </button>
                        </td>

                        <td>
                            <NavLink to={`/details`}><Button variant="success" id='action_btn'>Details</Button></NavLink>
                            <NavLink to={`/update`}><Button variant="warning" id='action_btn'>Update</Button></NavLink>
                            <Button variant="danger" id='action_btn'>Delete</Button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}

export default Record_Table
