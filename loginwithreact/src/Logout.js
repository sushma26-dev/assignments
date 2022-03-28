import { useNavigate } from "react-router-dom";

function Logout(){
    const navigate=useNavigate();
    const rem=sessionStorage. removeItem('loginDetails');
    if(rem){
        navigate("/login");
    }
    
//    return ();
}
export default Logout;