import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUsersById } from "./UserApi";
//import { insertUsers } from "./UserApi";

function UserDetails() {

    const [name, userNameSet] = useState("");
    const [pno, setpno] = useState("");
    const [vpno, setvpno] = useState("");

    const [email, updateEmail] = useState("");
    const [address, updateAddress] = useState("");
    const [userId, setUserId] = useState(11);
    const navigate = useNavigate();
    const routeParams=useParams();

    useEffect(()=>{
        if(routeParams.id){
            getUsersById(routeParams.id).then((response) => response.json())
            .then((userDetails) => {
                console.log(userDetails);
               // setUserId(userId + 1);
                userNameSet(userDetails.name);
                updateEmail(userDetails.email);
                alert("user added successfully");
                // navigate("/users");
            });
        }
    },[routeParams.id]);

    function uservalue(event) {
        let phone = event.target.value;
        if (!Number(phone)) {
            let error = <strong>Error,Please fill it with numbers only</strong>;
            setvpno(error);
        }
        else {
            setvpno("");
        }
        setpno(phone);

    }
    function userName(event)
     {
        userNameSet(event.target.value);
    }

    function addEmployee() {

        const newUserObj = {
            "id": userId,
            "name": name,
            "username": "",
            "email": email,
            "address": {
                "street": address,
                "suite": "",
                "city": "",
                "zipcode": "",

            }
        };
        // console.log(newUserObj);
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(newUserObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                alert("add");
                console.log(json);
                setUserId(userId + 1);
                // resetForm();
                alert("user added successfully");
                 navigate("/users");
            });
    }


    return (
        <div className="empFull">
            <h1 className="empHeader">User Form</h1>
            <form className="empForm was-validated">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> Employee Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required onChange={userName} value={name} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> Employee Address</label>
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={address}
                        onChange={event => updateAddress(event.target.value)}
                    ></textarea>
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Employee Phonenumber</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required onChange={uservalue} value={pno} aria-describedby="emailHelp" />
                    {vpno}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Employee Emailid</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={event => updateEmail(event.target.value)} value={email} required aria-describedby="emailHelp" />
                </div>
                {
                    !routeParams.id && <button type="submit" className="btn btn-primary" onClick={addEmployee}>Submit</button>
                }
                {
                    routeParams.id && <button type="submit" className="btn btn-primary">Update</button>
                }

                <button type="submit" className="btn btn-primary" onClick={addEmployee}>Submit</button>&emsp;
            </form>
        </div>
    );
}

export default UserDetails;