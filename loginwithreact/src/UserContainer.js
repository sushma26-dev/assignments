// import UserList from './UserList';
// import UserDetails from './UserDetails';
import { Outlet } from 'react-router-dom';

function UserContainer() {
  return (
    <div className='emp-container'>
      <Outlet />
    </div>
  )
}

export default UserContainer;