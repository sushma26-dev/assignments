import img1 from './img1.jpg';
import './App.css';
import Login from './auth/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <span style={{ color: 'white', fontSize: '1.6rem' }}>Amadis </span>
                    <div id="navbarResponsive">
                        <ul className="navbar-nav">
                                <li className='nav-item mx-0 mx-lg-1' >
                                    <Link to={'/' } className='li' style={{ color: 'white'}}>Home</Link>
                                </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>

          <div className='row'>
            <div className='col-6' image>
              <img src={img1} width='700px' height='600px'></img>
            </div>
            <div className='col-6 login'>
              <h2 className='heading'>Login Here</h2>
              
              <Login/>            

            </div>
          </div>
        
      </div>

  );
}

export default App;
