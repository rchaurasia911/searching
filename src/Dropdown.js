import 'bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect ,useParams} from "react";
import axios from "axios";


function Dropdown()
{
  const [users, setUser] = useState([]);
  const [req, setReq] = useState({
      stateName:"",
      cityName:""
  });
  const [stadium, setStadium] = useState([]);
  // const { ids } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost/php_file_backend/fetch_state.php");
    setUser(result.data.reverse());
  };
 
  // Code for Select city on State click
  const selectState =  (e) => {
    let name = e.target.name;
    let value = e.target.value;
    req[name] = value;
    var data = value;
    alert(data)
  
     var response = fetch("http://localhost/php_file_backend/fetch_records.php/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: data }),
      }).then(function(response){
        return response.json();
      })
      .then(function(myJson) 
      {
        setReq(myJson)
      })
  };

  const selectCity =  (e) => {
    let name = e.target.name;
    let value = e.target.value;
    req[name] = value;
    var data = value;
    alert(data)
  
     var response = fetch("http://localhost/php_file_backend/get_stadium_address.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cityID: data }),
      }).then(function(response){
        return response.json();
      })
      .then(function(myJson) 
      {
        console.log(myJson)
        setStadium(myJson)
      })
  };

  return(
    <div className="container">
    <h3 className="mt-4 text-center text-secondary">Dependent Dropdown in REACT JS</h3>
     <div className="row">
       <div className="col-sm-3">
         <h5 className="mt-5 mb-3">Select State list</h5>
          <select  onChange={selectState} name="stateName" className="form-control mt-3">
            {users.map((user, index) => (
              <option value={user.id}>{user.stateName}</option>
            ))}
          </select>
       </div>

       <div class="col-sm-3">
        <h5 class="text-info mt-5 mb-3">Cities</h5>
         <select onChange={selectCity} name="cityName" class="form-control" >
          {req && req.length>0 && req.map((user, index) => (
              <option value={user.id}>{user.City_Name}</option>
              
            ))}
         </select>
      </div>

      <div class="col-sm-3">
        <h5 class="text-info  mt-5 mb-3">Stadiums List</h5>
        <select  id="stadium" class="form-control">
          {stadium && stadium.length>0 && stadium.map((user, index) => (
              <option value={user.id}>{user.Stadium_list}</option>
            ))}
        </select>
      </div>

      <div class="col-sm-3">
        <h5 class="text-info mt-5 mb-3">Stadiums Address</h5>
        <select id="address" class="form-control">
           {stadium && stadium.length>0 && stadium.map((user, index) => (
              <option value={user.id}>{user.Stadium_Address}</option>
            ))}
       </select>
    </div>

    <div class="col-sm-4 mt-4 offset-sm-4">
        <h5 class="text-info  mb-4">Stadium Details</h5>
           {stadium && stadium.length>0 && stadium.map((user, index) => (
              <option value={user.id}>{user.Stadium_detail}</option>
            ))}
    </div>

  </div>
</div>   

  )
}
export default Dropdown;
