import img1 from './img1.jpg';
import './App.css';
import Login from './auth/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
        

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
