import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userList, setItems] = useState([]);
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  const [checkReg, setReg] = useState([]);


  //const employees = JSON.parse(localStorage.getItem('userList'));
  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem('userList'));
    console.log(userList);
    if (userList) {
      setItems(userList);
    }
  }, []);

  const userLoginDetails = JSON.parse(sessionStorage.getItem('loginDetails'));
  if (userLoginDetails !== null) {
    window.location.href = "#/dashboard";
    return (
      <div></div>
    );
  }
  else {

    function checkRegister(event) {
      console.log("userlist in fn  ", userList);
      console.log("username is ", userName);

      userList.map(function (items, i) {
        console.log("jjj", items);
        console.log("jjj", items.username);
        console.log("jjj", items.password);
        console.log("index is ", i);


        var total = {
          username: userName,
          password: password,
          index: i
        };


        ((userName === items.username) && (password === items.password)) ?
          sessionStorage.setItem('loginDetails', JSON.stringify(total)) : console.log("invalid user");
        ((userName === items.username) && (password === items.password)) &&
          navigate("/dashboard");
      })


      event.preventDefault();
    }


    return (
      <div className="loginForm">


        <form>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail3" placeholder='a@gmail.com' required onChange={e => setUsername(e.target.value)} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" required onChange={e => setPassword(e.target.value)} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={checkRegister}>Sign in</button>
          <p className="signup">Create Account <a href="#/register">Click Here</a></p>
        </form>
      </div>

    );
  }
}
export default Login;