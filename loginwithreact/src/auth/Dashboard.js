//import { useNavigate } from "react-router-dom";

function Dashboard() {
  // const navigate = useNavigate();
 

  const userLoginDetails = JSON.parse(sessionStorage.getItem('loginDetails'));
  if (userLoginDetails === null) {
    window.location.href = "#/login";
    // navigate("/login");
  }
  const index = userLoginDetails.index;

  const totalList = JSON.parse(localStorage.getItem('userList'));

  const loginUser = totalList[index];

  function logout(){
    const rem=sessionStorage.removeItem('loginDetails');
    window.location.href = "#/login";
  }

  return (
    <div>
      <div className="row">
        <div className='col-3 navigation'>
          <h1 className="cname">Amadis Global</h1>
          <h3 className="uname">
            Welcome {userLoginDetails.username}</h3>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#/dashboard">Dashboard</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" onClick={logout}>Logout</a>
            </li>

          </ul>


        </div>
        <div className='col-9 dashboard'>
          <h1 style={{ paddingTop: 25 }}><center>User Details</center></h1>
          <div className="design">
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                {loginUser.regname}
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Mobile Number</label>
              <div className="col-sm-10">
                {loginUser.number}
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email Id</label>
              <div className="col-sm-10">
                {loginUser.email}
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">UserName</label>
              <div className="col-sm-10">
                {loginUser.username}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;