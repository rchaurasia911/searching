import React from 'react';
import MaterialTable from 'material-table'
// import Search from './Search';
const Mtable = ()=>{
    const data = [
        {
            name:'Max',
            age:  25,
            status:0,
            role:1
        },
        {
            name:'sohan',
            age:  30,
            status:1,
            role:0
        },
        {
            name:'xyz',
            age:  45,
            status:1,
            role:3
        },
        {
            name:'sumit',
            age:  15,
            status:0,
            role:2
        },
        {
            name:'ranjeet',
            age:  20,
            status:1,
            role:0
        },
        {
            name:'amit',
            age:  35,
            status:1,
            role:2
        }
    ];
    const columns = [
        {
            title:"Name", field:'name'
        },
        {
            title:'Age', field:'age'
        },
        {
            title:'Status', field:'status',render:(row)=><div className={row.status ? 'active': 'deactive'}>
                {row.status ? 'Active': 'Deactive'}</div>
        },
        {
            title:'Role', field:'role'
        }
    ]
    return (
        <>
            <MaterialTable 
                title="material Table"
                data = {data}
                columns = {columns}
                options={{
                    search:false,
                    paging:false,
                    exportButton:true,
                    filtering:true
                }}
            />
        </>
    )
}
export default Mtable;