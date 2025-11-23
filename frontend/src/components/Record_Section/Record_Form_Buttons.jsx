import React from 'react'
import { Button } from 'react-bootstrap'

const Record_Form_Buttons = () => {
    return (
        <>
            <Button variant="primary" id="action_btn" type='submit'>Create</Button>
            <Button variant="primary" id="action_btn" type='reset'>Reset</Button>
        </>
    )
}

export default Record_Form_Buttons
