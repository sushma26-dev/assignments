import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [regname, setName] = useState();
  const [number, setPhone] = useState();
  const [email, setMail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // const [userList,setRegList]=useState([]);

  const navigate = useNavigate();
  const userLoginDetails = JSON.parse(sessionStorage.getItem('loginDetails'));
  if (userLoginDetails !== null) {
    window.location.href = "#/dashboard";
  }
  else {


    function addEmployee(event) {
      if (!regname) {
        alert("Enter Name");
      }
      else if (!number) {
        alert("Please enter Mobile number");
      }
      else if (!email) {
        alert("Please enter Email");
      }
      else if (!username) {
        alert("Please enter Username");
      }
      else if (!password) {
        alert("Please enter Password");
      }
      else {
        var exitData = JSON.parse(localStorage.getItem("userList"));
        var updatedEmpListPush = JSON.parse(JSON.stringify(exitData));

        updatedEmpListPush.push({
          regname: regname,
          number: number,
          email: email,
          username: username,
          password: password

        });
        // setRegList(updatedEmpListPush);
        console.log("updated state", updatedEmpListPush);
        localStorage.setItem("userList", JSON.stringify(updatedEmpListPush));
        event.preventDefault();
        navigate("/login");
        //resetForm();
        //props.onEmployeeListChange(updatedEmpListPush);    
      }
    }

    console.log("name is" + regname);
    return (
      <div>
        <div className="row">
          <div className='col-3 welcome'>
            <h2>
              Welcome
            </h2>
            <h3>to</h3>
            <p className="amadis">AMADIS GLOBAL</p>
            <h3>Registration Page</h3>
          </div>
          <div className='col-9 formreg'>
            <p className="heading1">Registration Page</p>
            <div className="register">
              <form className="row g-3">
                <div className="col-md-12">
                  <label htmlFor="inputName" className="form-label">Name</label>
                  <input type="text" className="form-control" id="inputCity" name={regname} required onChange={e => setName(e.target.value)} />
                </div>
                <div className="col-12">
                  <label htmlFor="inputMobile" className="form-label">Phone Number</label>
                  <input type="Number" className="form-control" id="inputMobile" name={number} required placeholder="121232" onChange={e => setPhone(e.target.value)} />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" name={email} required onChange={e => setMail(e.target.value)} />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">Username</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="a@gmail.com" required name={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputPassword4" className="form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword4" name={password} required onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="col-6">
                  <button type="submit" className="btn btn-primary" onClick={addEmployee}>Sign in</button>
                  <p className="signup">Already Have an Account <a href="#/login">Click Here</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default RegisterPage;