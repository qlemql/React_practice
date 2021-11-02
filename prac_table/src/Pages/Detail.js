import React,{useState} from 'react';
import MaterialTable from 'material-table'

const Detail = () => {
    const [tableData, setTableData] = useState([]);
    const columns = [
        {title:"Name", field:"name"},
        {title:"Email", field:"email"},
        {title:"Photo", field:"photo"},
    ]
    return (
        <>
        <div>Detail Page</div>
        <MaterialTable columns={columns} data={tableData} />
        </>
    )
}

export default Detail