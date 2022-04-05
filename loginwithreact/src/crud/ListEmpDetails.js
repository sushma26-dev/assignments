function ListEmpDetails(props){
    const employees = props.employees || [];
   // if a is false (props.emp) then go to b (default)
 //  const employeesEdit = props.onEmployeeEdit || [];

    return(
        <div className="empListFull">
            <h1 className="empHeader">Employee Registration Form</h1>
            <p>Total Number in list is {employees.length}</p>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Action</th>
                    </tr>     
                </thead>
                <tbody>
                {
                    employees.map((emp, i) =>
                            
                    <tr key={"emp" + i.toString()} className="">
                        <td scope="row">{i+1}</td>
                        <td>{emp.name}</td>
                        <td>{emp.address}</td>
                        <td>{emp.pno}</td>
                        <td>{emp.email}</td>
                        <td>{emp.gender}</td>
                        <td>{emp.designation}</td>
                        <td>
                            <button onClick={event => props.onEmployeeEdit(emp,i)}>Edit</button>
                            <button onClick={event => props.onEmployeeDelete(emp)}>Delete</button>
                        </td>
                    </tr>
                
                            
                    )
                }
                </tbody>
            </table>
            
            
        </div>
    );
}

export default ListEmpDetails;