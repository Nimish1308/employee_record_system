import React from 'react'
import { Button } from 'react-bootstrap'

const Record_Pagination = ({ currentPage, btnPrev, btnNext, totalPage, btnNumber }) => {
    return (
        <div className='container' id='pagination_body'>
            <Button variant="primary" id="action_btn" onClick={btnPrev} disabled={currentPage == 1}>Prev</Button>
            {
                Array.from({ length: totalPage }, (_, index) => (
                    <Button variant="primary" id="action_btn" onClick={() => btnNumber(index + 1)}
                        className={currentPage == index + 1 ? "active" : ""}>{index + 1}</Button>
                ))
            }
            <Button variant="primary" id="action_btn" onClick={btnNext} disabled={currentPage == totalPage}>Next</Button>
        </div>
    )
}

export default Record_Pagination
