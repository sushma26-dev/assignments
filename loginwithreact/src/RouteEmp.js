import EmpRouteDetails from './EmpRouteDetails';
import ListEmpRouteDetails from './ListEmpRouteDetails';

function RouteEmp() {
    return(
        <div className="container">
        <div className="row">
            <div className='col-md-6 col-sm-12'>
                <EmpRouteDetails />

            </div>
            <div className='col-md-6 col-sm-12 listdetails'>
                <ListEmpRouteDetails />
            </div>

        </div>
    </div>
    )
    
}
export default RouteEmp;