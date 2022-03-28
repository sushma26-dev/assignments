import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import RegisterPage from './RegisterPage';
import Dasbboard from './Dashboard';
import Invalid from './Invalid';
//import Logout from './Logout';
//lazy load
const Logout = React.lazy(() => import("./Logout"));

function Routing() {

    
    return (
        <div>
            
            <HashRouter>
                
                <Routes>
                    <Route path='/login' element={<App />} />
                    <Route path='/register' element={<RegisterPage />} /> 
                    <Route path='/dashboard' element={<Dasbboard />} />
                    {/* <Route path='/logout' element={<Logout />} /> */}
                    <Route path='*' element={<Invalid />} /> 
                    <Route path='/' element={<App />} />                     
                    <Route path='/logout' element={
                        <React.Suspense fallback={<h2>Loading....</h2>}>
                            <Logout />
                        </React.Suspense>
                    } /> 
                    
                   
                </Routes>

                
            </HashRouter>



        </div>

    );
}

export default Routing;
