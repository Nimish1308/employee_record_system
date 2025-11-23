import React from 'react'
import Emp_Form from '../Emp_Form'
import Record_Table from './Record_Table'
import Record_Form_Buttons from './Record_Form_Buttons'
import Record_Filter_Section from './Record_Filter_Section'
import Record_Pagination from './Record_Pagination'

const Records = () => {
  return (
    <>
      <Emp_Form>
        <Record_Form_Buttons />
      </Emp_Form>
      <hr />
      <Record_Filter_Section />
      <hr />
      <Record_Table />
      <Record_Pagination/>
    </>
  )
}

export default Records
