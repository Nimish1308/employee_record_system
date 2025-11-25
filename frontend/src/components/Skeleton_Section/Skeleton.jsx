import Skeleton from "react-loading-skeleton";

const Table_Skeleton = () => {
    return (
        <>
            <tr>
                <td><Skeleton width={30} /></td>

                <td>
                    <div className="d-flex align-items-center">
                        <Skeleton circle width={45} height={45} />
                        <div className="ms-3">
                            <p className="fw-bold mb-1"><Skeleton width={120} /></p>
                        </div>
                    </div>
                </td>

                <td><Skeleton width={50} /></td>

                <td>
                    <Skeleton width={80} height={25} />
                </td>

                <td><Skeleton width={100} /></td>

                <td><Skeleton count={2} /></td>

                <td className="d-flex gap-2">
                    <Skeleton width={70} height={35} />
                    <Skeleton width={70} height={35} />
                    <Skeleton width={70} height={35} />
                </td>
            </tr>

        </>
    )
}

const Filter_Button_Skeleton = () => {
    return (
        <>
            <div className="filter container" id='filter_body'>

                <div className="d-flex gap-2 mt-2 flex-wrap">

                    <Skeleton width={80} height={40} />
                    <Skeleton width={80} height={40} />
                    <Skeleton width={80} height={40} />
                    <Skeleton width={100} height={40} />
                    <Skeleton width={70} height={40} />

                </div>

            </div>
        </>)
}

const Filter_Search_Bar_Skeleton = () => {
    return (
        <>
            <div>
                <Skeleton height={40} style={{ width: "400px"}} />
            </div>
        </>
    )
}

export { Table_Skeleton, Filter_Button_Skeleton, Filter_Search_Bar_Skeleton }