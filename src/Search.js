import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
// import Table from './Table'


function Search() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase()) ||
        country.email.toLowerCase().includes(search.toLowerCase()) ||
        country.username.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  if (loading) {
    return <p>Loading countries...</p>;
  }

  return (
    <div className="App">
      <h1>Countries Lists</h1>
     
      <input
        type="text"
        placeholder="Search Countries"
        onChange={(e) => setSearch(e.target.value)}
      />
     
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
                {
                    filteredCountries.map((a)=>{
                        return (
                            <>
<tr>
                <th scope="row">{a.id}</th>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.username}</td>
                </tr>
                            </>
                        )
                    })
                }
                
            </tbody>
            </table>

    </div>
  );
}

export default Search;


