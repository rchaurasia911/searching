const Table = (props)=>{
    const {name,id,email,username} = props;
    return(
        <>
        <table className="table">
<thead>
    <tr>
    <th scope="col">Id</th>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">Username</th>
    </tr>
</thead>
<tbody>
   
       
            
<tr>
    <th scope="row">{id}</th>
    <td>{name}</td>
    <td>{email}</td>
    <td>{username}</td>
    </tr>
               
        
           
    
</tbody>
</table>

        </>
    )
    
} 
export default Table;
