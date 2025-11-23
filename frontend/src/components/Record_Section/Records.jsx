import React from 'react'
import Emp_Form from '../Emp_Form'
import Record_Table from './Record_Table'
import Record_Form_Buttons from './Record_Form_Buttons'
import Record_Filter_Section from './Record_Filter_Section'
import Record_Pagination from './Record_Pagination'

const Records = ({ records, input, setFilter, getFilter, setInput, handleChange, handleSubmit, handleDeleteRecord, btnFilter }) => {
  return (
    <>
      <Emp_Form input={input} setInput={setInput} handleChange={handleChange} handleSubmit={handleSubmit}>
        <Record_Form_Buttons />
      </Emp_Form>
      <hr />
      <Record_Filter_Section records={records} setFilter={setFilter} getFilter={getFilter} btnFilter={btnFilter}/>
      <hr />
      <Record_Table records={records} handleDeleteRecord={handleDeleteRecord} btnFilter={btnFilter} />
      <Record_Pagination />
    </>
  )
}

export default Records
