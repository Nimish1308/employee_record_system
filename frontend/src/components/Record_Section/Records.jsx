import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Emp_Form from '../Emp_Form'
import Record_Table from './Record_Table'
import Record_Form_Buttons from './Record_Form_Buttons'
import Record_Filter_Section from './Record_Filter_Section'
import Record_Pagination from './Record_Pagination'

const Records = ({ records, input, setFilter, getFilter, setInput, handleChange, handleSubmit, handleDeleteRecord, btnFilter,
  currentPage, btnPrev, btnNext, totalPage, indexOfFirstItem, currentIndex, btnNumber }) => {

  const { loading } = useSelector(state => state.employeeState);
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  useEffect(() => {
    setSkeletonLoading(loading);
  }, [loading]);

  return (
    <>
      <Emp_Form input={input} setInput={setInput} handleChange={handleChange} handleSubmit={handleSubmit}>
        <Record_Form_Buttons />
      </Emp_Form>
      <hr />
      <Record_Filter_Section records={records} setFilter={setFilter} getFilter={getFilter} btnFilter={btnFilter} skeletonLoading={skeletonLoading} />
      <hr />
      <Record_Table records={records} handleDeleteRecord={handleDeleteRecord} btnFilter={btnFilter} indexOfFirstItem={indexOfFirstItem}
        currentIndex={currentIndex} skeletonLoading={skeletonLoading}/>
      <Record_Pagination currentPage={currentPage} btnPrev={btnPrev} btnNext={btnNext} totalPage={totalPage} btnNumber={btnNumber} />
    </>
  )
}

export default Records
