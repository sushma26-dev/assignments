import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useEffect, useState } from 'react';
import RouteEmp from './RouteEmp';
import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import UserDetails from './UserDetails';
import Invalid from './Invalid';
import UserContainer from './UserContainer';
//import HookContainer from './HookContainer';
//lazy load
const HookContainer = React.lazy(() => import("./HookContainer"));


function Routing() {
    const [activeMenu, setActiveMenu] = useState("");

    const menuItems = [
        { key: "employees", "displayName": "Employees", isDefaut: true },
        { key: "users", "displayName": "User", isDefaut: false },
        { key: "hooks", "displayName": "Hooks", isDefaut: false }
    ];

    useEffect(() => {
        const defaultMenu = menuItems.filter((menu) => menu.isDefaut);
        setActiveMenu(defaultMenu[0].key);
    }, []);

    return (
        <div>
            {/**2 typeof router
         * BrowserRouter-->ex:localhost:3000/users =>this type is loading with user 
         * find error easy
         * HashRouter-->ex:localhost:3000/#/users =>it loading with localhost only
         * any error occurs not able to find the eror is from which part
         */}

            {/* <BrowserRouter>
                <ul>
                    {
                        menuItems.map((menu) =>
                            <Link to={'/' + menu.key}>{menu.displayName}</Link>
                        )
                    }
                </ul>

                <Routes>
                    <Route path='/employees' element={<RouteEmp />} />
                    <Route path='/users' element={<UserJson />} >
                        <Route path='all' element={<UserList/>} />
                        <Route path='new' element={<UserDetails/>} />
                        <Route path=':id' element={<UserDetails/>} />
                    </Route>
                    <Route path='/hooks' element={<HookContainer />} />
                    <Route path='/' element={<RouteEmp/>} />
                </Routes>
            </BrowserRouter> */}



            <HashRouter>
                <ul>
                    {
                        menuItems.map((menu) =>
                            <li className='menu-item'>
                                <Link to={'/' + menu.key}>{menu.displayName}</Link>
                                {/* <a href={'/'+menu.key}>{menu.displayName}</a> this will load entair page,so that we not use it */}
                            </li>
                        )
                    }
                </ul>
                <Routes>
                    <Route path='/employees' element={<RouteEmp />} />
                    <Route path='/users' element={<UserContainer />} > {/*create <outlet/> fot it to reach child*/}
                        <Route path='all' element={<UserList />} />
                        <Route path='new' element={<UserDetails />} />
                        <Route path=':id' element={<UserDetails />} />
                        <Route index element={<UserList />} />
                    </Route>

                    {/* <Route path='users' element={
            <React.Suspense fallback={<h2>Loading...</h2>}>
              <UserContainer />
            </React.Suspense>
          }>
            <Route path='new' element={
              <React.Suspense fallback={<h2>Loading...</h2>}>
                <UserDetails />
              </React.Suspense>
            } />
            <Route path=':id' element={
              <React.Suspense fallback={<h2>Loading...</h2>}>
                <UserDetails />
              </React.Suspense>
            } />
             <Route index element={
              <React.Suspense fallback={<h2>Loading...</h2>}>
                <UserList />
              </React.Suspense>
            } />
          </Route> */}

                    {/* <Route path='/hooks' element={<HookContainer />} /> */}
                    {/**For lazy loaded provide like this */}
                    <Route path='/hooks' element={
                        <React.Suspense fallback={<h2>Loading....</h2>}>
                            <HookContainer />
                        </React.Suspense>
                    } />{/**for index =>path="" to index */}
                    <Route path='*' element={<Invalid />} /> {/**it means path is anything apart from defined path */}
                    <Route path='/' element={<RouteEmp />} />
                    {/* 
                                or
                    <Route index element={<RouteEmp/>} /> 
                                or
                     
                    */}
                </Routes>

                {/* // {<Switch>
                //   <Route path='/employees'>
                //     <EmployeeContainer />
                //   </Route>
                //   <Route path='/users'>
                //     <UserContainer />
                //   </Route>
                // </Switch> } */}
            </HashRouter>



        </div>

    );
}

export default Routing;
