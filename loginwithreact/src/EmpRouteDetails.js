import { useState, useEffect} from "react";

function EmpRouteDetails(){
   // console.log("props is",props);

  //  const name="sushma"; value is not changed &cant able to modify it.so we go for destructuring method
//destructuring method
    const [name,userNameSet] =useState("");
    const [pno,setpno] =useState("");
    const [vpno,setvpno] =useState("");
    /*const def=useState("");
    const pno=def[0];
    const setpno=def[1];*/
    const [email,updateEmail] =useState("");
    const [address,updateAddress] =useState("");
    const [designation,updateDesig] =useState("");
    const [gender,updateGender] =useState("Male");



    
    function uservalue(event){
        let phone=event.target.value;
        if(!Number(phone))
        {
            let error=<strong>Error,Please fill it with numbers only</strong>;
            setvpno(error);
        } 
        else{
            setvpno("");
        }       
            setpno(phone);       
                
    }
    function userName(event){
         userNameSet(event.target.value);        
    }
    function genderMale(event){
        if(event.target.checked){
            updateGender("Male");
        }
    }
    function genderFemale(event){
        if(event.target.checked){
            updateGender("Female");
        }
    }

    
    return(
        <div className="empFull">
            <h1 className="empHeader">Employee Registration Form</h1>
            <form className="empForm was-validated">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> Employee Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required onChange={userName} value={ name } aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> Employee Address</label>
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={address}
                    onChange={event => updateAddress(event.target.value)} 
                    ></textarea>
                </div>
                
                
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Employee Phonenumber</label>
                    <input type="text" className="form-control"  id="exampleInputEmail1" required onChange={uservalue} value={pno} aria-describedby="emailHelp"/>
                    {vpno}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Employee Emailid</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={event => updateEmail(event.target.value)} value={email} required aria-describedby="emailHelp"/>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Employee Designation</label>
                    <select className="form-select"  value={designation}
                    onChange={event => updateDesig(event.target.value)} 
                    >
                        <option>Open this select menu</option>
                        <option value="Front-end">Front-end</option>
                        <option value="Back-end">Back-end</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Employee Gender</label>
                    <div>
                        <input type="radio" id="male" name="gender" value="Male" checked={gender==='Male'} onChange={genderMale}/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender" value="Female" checked={gender==='Female'} onChange={genderFemale}/>
                        <label htmlFor="female">Female</label>
                    </div>
                    
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>&emsp;
            </form>
        </div>
    );
}

export default EmpRouteDetails;