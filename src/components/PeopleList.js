import React, { useState } from "react";
import axios from "axios";

const PeopleList = () =>{


    const[people,setPeople]=useState([]);
    const[loading,setLoading]=useState(false);


    function userList(){
    axios.get("https://reqres.in/api/users")
    .then((response)=>{
        setPeople(response.data.data);
        setLoading(true);
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    })
   }



    return(
        <div>
            <button className="btn" onClick={userList}>Get User List</button>
            {
                loading && 

                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Avataar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            people.map((peeps)=>(
                                <tr id={peeps.id}>
                                <td>{peeps.first_name}</td>
                                <td>{peeps.last_name}</td>
                                <td>{peeps.email}</td>
                                <td>{<img src={peeps.avatar}/>}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
            
        </div>
    )
}

export default PeopleList;