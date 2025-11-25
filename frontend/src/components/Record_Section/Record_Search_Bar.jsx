import React from 'react'
import { Filter_Search_Bar_Skeleton } from '../Skeleton_Section/Skeleton';

const Record_Search_Bar = ({ btnFilter, setFilter, records, skeletonLoading }) => {
    const handleSearchBar = (e) => {
        const text = e.target.value.toLowerCase();
        console.log(text);

        try {
            if (text == "") {
                setFilter(records)
            }
            else {
                const res = btnFilter.filter((item) => {
                    return (item.field.toLowerCase().includes(text) || item.name.toLowerCase().includes(text))

                })
                setFilter(res);
            }
        } catch (error) {
            console.error(error);

        }
    }
    return (
        <>
            {
                skeletonLoading ? (
                    Array(1).fill(0).map((_, i) => <Filter_Search_Bar_Skeleton key={i} />)
                ) : (
               <>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id='search_body'
                    onChange={handleSearchBar} />
               </>
                )
            }
        </>
    )
}

export default Record_Search_Bar
