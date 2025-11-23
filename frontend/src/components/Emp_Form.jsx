import React from 'react'
import { Form } from 'react-bootstrap';

const Emp_Form = ({ children, input, setInput, handleChange, handleSubmit }) => {
    return (
        <>
            <Form className='container' id='form_body' onSubmit={handleSubmit}
                onReset={() => {
                    setInput(() => ({
                        name: "",
                        age: "",
                        gender: "",
                        field: "",
                        description: ""
                    }))
                }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name" required name='name' value={input.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Age:</Form.Label>
                    <Form.Control type="text" placeholder="Enter age" required name='age' value={input.age} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Gender:</Form.Label>
                    <Form.Check type="radio" label="Male" value="Male" name='gender' id='gender' required
                        checked={input.gender === "Male"} onChange={handleChange} />

                    <Form.Check type="radio" label="Female" value="Female" name='gender' id='gender' required
                        checked={input.gender === "Female"} onChange={handleChange} />

                    <Form.Check type="radio" label="Other" value="Other" name='gender' id='gender' required
                        checked={input.gender === "Other"} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Field:</Form.Label>
                    <Form.Select required name='field' value={input.field} onChange={handleChange} >
                        <option value="">Select Field</option>
                        <option value="MERN">MERN</option>
                        <option value="FSD">FSD</option>
                        <option value="Associate">Associate</option>
                        <option value="IT">IT</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Description:</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter description" rows={4} required name='description' value={input.description} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Upload Photo:</Form.Label>
                    <Form.Control type="file" name="photo" onChange={handleChange} />
                </Form.Group>

                {/* <Button variant="primary" type="submit">
                    Submit
                </Button> */}

                {children}
            </Form>
        </>
    )
}

export default Emp_Form
