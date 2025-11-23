import React from 'react'
import { Button } from 'react-bootstrap'
import Record_Search_Bar from './Record_Search_Bar'

const Record_Filter_Section = ({ setFilter, getFilter, records, btnFilter }) => {

  return (
    <>
      <div className="filter container" id='filter_body'>
        <b>Sort by</b>
        <Button variant="success" id='action_btn' onClick={() => setFilter(records)}>All</Button>
        <Button variant="success" id='action_btn' onClick={() => getFilter("MERN")}>MERN</Button>
        <Button variant="success" id='action_btn' onClick={() => getFilter("FSD")}>FSD</Button>
        <Button variant="success" id='action_btn' onClick={() => getFilter("Associate")}>Associate</Button>
        <Button variant="success" id='action_btn' onClick={() => getFilter("IT")}>IT</Button>

        <Record_Search_Bar btnFilter={btnFilter} setFilter={setFilter} records={records}/>
      </div>
    </>
  )
}

export default Record_Filter_Section
