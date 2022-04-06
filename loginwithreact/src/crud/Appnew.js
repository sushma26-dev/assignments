import '../App.css';
import EmpDetails from './EmpDetails';
import ListEmpDetails from './ListEmpDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Appnew() {
  //it is used to get value from the form and give to grid
  const [empObjList, setEmpObjList] = useState([]);

  //it is used to get value from the form and give to grid,it not an array its an obj ,it donot have multiple datas ,
  //have one form data with multiple values
  const [editEmpObjList, setEditObjList] = useState({});
  const [editEmpObjIndex, setEditObjIndex] = useState();

  const [deleteEmpObjList, setDeleteObjList] = useState("");


  function updateEmpList(newList) {
    console.log("***", newList);
    setEmpObjList(newList);
  }

  function onEmpEdit(editObj, index) {

    setEditObjList(editObj);
    setEditObjIndex(index);
  }

  function deleteEmpList(indexval, i) {
    setDeleteObjList(indexval);
    var index = empObjList.indexOf(indexval);
    empObjList.splice(index, 1);


  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          {/* <marquee width="30%" direction="left" height="60px"> */}
            <span style={{ color: 'white', fontSize: '1.6rem' }}>AMADIS Welcomes You!!</span>
          {/* </marquee> */}
          <div id="navbarResponsive">
            <ul className="navbar-nav">
              <li className='nav-item mx-0 mx-lg-1' >
                <Link to={'/'} className='li' style={{ color: 'white' }}>Home</Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>
      <div className="container">

        <div className="row">
          <div className='col-md-6 col-sm-12'>
            <EmpDetails onEmployeeListChange={updateEmpList} editobj={editEmpObjList} indexObj={editEmpObjIndex} />

          </div>
          <div className='col-md-6 col-sm-12 listdetails'>
            <ListEmpDetails employees={empObjList} onEmployeeEdit={onEmpEdit} onEmployeeDelete={deleteEmpList} />
          </div>

        </div>
      </div>
    </div>



  );
}

export default Appnew;
