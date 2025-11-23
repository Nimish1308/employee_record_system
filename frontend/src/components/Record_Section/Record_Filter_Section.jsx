import React from 'react'
import { Button } from 'react-bootstrap'
import Record_Search_Bar from './Record_Search_Bar'

const Record_Filter_Section = () => {
  return (
    <>
      <div className="filter container" id='filter_body'>
        <b>Sort by</b>
        <Button variant="success" id='action_btn' >All</Button>
        <Button variant="success" id='action_btn' >MERN</Button>
        <Button variant="success" id='action_btn' >FSD</Button>
        <Button variant="success" id='action_btn' >Associate</Button>
        <Button variant="success" id='action_btn' >IT</Button>

        <Record_Search_Bar/>
      </div>
    </>
  )
}

export default Record_Filter_Section
