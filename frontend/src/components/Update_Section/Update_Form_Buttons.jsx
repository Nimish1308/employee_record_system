import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router'

const Update_Form_Buttons = () => {
    return (
        <>
            <Button variant="primary" id="action_btn">Update</Button>
            <NavLink to={`/`}><Button variant="primary" id="action_btn">Back</Button></NavLink>
        </>
    )
}

export default Update_Form_Buttons
