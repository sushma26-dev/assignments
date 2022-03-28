import { useEffect, useState } from "react";
import { getUsers } from "./UserApi";

function UserList(){
    const [users,setUsers]=useState([]);

    // useEffect(()=>
    //     //make api call from local & set users
    //     fetch("http://localhost:3000/users.json",{
    //         "method":"GET",
    //         "headers":{
    //             "content-type":"application/json"
    //         }
    //     }).then(Response=>{
    //         return Response.json();
    //     }).then(Response=>{
    //        // console.log(Response);
    //        setUsers(Response.users);
    //     })
    // );

    useEffect(()=>{
        getUsers().then(Response=>{
            return Response.json();
        }).then(Response=>{
           // console.log(Response);
           setUsers(Response);
        })
    },[] );

    return(
        <div className="empListFull">
            <h1 className="empHeader">User Form</h1>
            <p>Total Number in list is {users.length}</p>
            <a href='#/users/new' style={{marginLeft: '20px'}}>New User</a>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Employee Name</th>
                        
                        <th scope="col">Email Id</th>
                        <th scope="col">street</th>
                        <th>city</th>
                        <th>Action</th>
                    </tr>     
                </thead>
                <tbody>
                {
                    users.map((user, i) =>
                            
                    <tr key={"user" + i.toString()} className="">
                        <td scope="row">{i+1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.street}</td>
                        <td>{user.address.city}</td>
                        
                       
                        <td>
                            <button><a href={'#/users/'+user.id}>Edit</a></button>
                            <button>Delete</button>
                        </td>
                    </tr>
                
                            
                    )
                }
                </tbody>
            </table>
            
            
        </div>
    );
}

export default UserList;