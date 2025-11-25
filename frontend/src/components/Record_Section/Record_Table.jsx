import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router'
import { Table_Skeleton } from '../Skeleton_Section/Skeleton'

const Record_Table = ({ records, handleDeleteRecord, btnFilter, indexOfFirstItem, currentIndex, skeletonLoading }) => {

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
                    {
                        skeletonLoading ? (
                            Array(5).fill(0).map((_, i) => <Table_Skeleton key={i} />)
                        ) : records.length == 0 || btnFilter.length == 0 ? (
                            <tr>
                                <td colSpan={7}>
                                    <h3 style={{ color: 'red' }}>No record available</h3>
                                </td>
                            </tr>
                        ) : (
                            currentIndex.map((item, i) => (
                                <tr key={i}>
                                    <td>{indexOfFirstItem + i + 1}</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={item.photo || "https://mdbootstrap.com/img/new/avatars/8.jpg"}
                                                alt=""
                                                style={{
                                                    width: "45px",
                                                    height: "45px",
                                                }}
                                                className="rounded-circle"
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">{item.name}</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">{item.age}</p>

                                    </td>
                                    <td>
                                        <span className="badge badge-success rounded-pill d-inline">{item.gender}</span>
                                    </td>
                                    <td>{item.field}</td>
                                    <td>
                                        {item.description}
                                    </td>

                                    <td>
                                        <NavLink to={`/details/${item._id}`}><Button variant="success" id='action_btn'>Details</Button></NavLink>
                                        <NavLink to={`/update/${item._id}`}><Button variant="warning" id='action_btn'>Update</Button></NavLink>
                                        <Button variant="danger" id='action_btn' onClick={() => handleDeleteRecord(item._id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        )
                    }

                </tbody>
            </table>
        </>
    )
}

export default Record_Table
