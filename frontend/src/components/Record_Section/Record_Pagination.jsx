import React from 'react'
import { Button } from 'react-bootstrap'

const Record_Pagination = () => {
    return (
        <div className='container' id='pagination_body'>
            <Button variant="primary" id="action_btn">Prev</Button>
            {
                <Button variant="primary" id="action_btn">1</Button>
            }
            <Button variant="primary" id="action_btn">Next</Button>
        </div>
    )
}

export default Record_Pagination
