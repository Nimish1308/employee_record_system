import React from 'react'
import { Button } from 'react-bootstrap'
import Record_Search_Bar from './Record_Search_Bar'
import { Filter_Button_Skeleton } from '../Skeleton_Section/Skeleton'

const Record_Filter_Section = ({ setFilter, getFilter, records, btnFilter, skeletonLoading }) => {
  return (
    <>
      <div className="filter container" id='filter_body'>
        <b>Sort by</b>
        <br />
        {
          skeletonLoading ? (
             Array(1).fill(0).map((_, i) => <Filter_Button_Skeleton key={i} />)
          ) : (
            <>
              <Button variant="success" id='action_btn' onClick={() => setFilter(records)}>All</Button>
              <Button variant="success" id='action_btn' onClick={() => getFilter("MERN")}>MERN</Button>
              <Button variant="success" id='action_btn' onClick={() => getFilter("FSD")}>FSD</Button>
              <Button variant="success" id='action_btn' onClick={() => getFilter("Associate")}>Associate</Button>
              <Button variant="success" id='action_btn' onClick={() => getFilter("IT")}>IT</Button>
            </>

          )
        }
        <Record_Search_Bar btnFilter={btnFilter} setFilter={setFilter} records={records} skeletonLoading={skeletonLoading}/>
      </div>
    </>
  )
}

export default Record_Filter_Section
