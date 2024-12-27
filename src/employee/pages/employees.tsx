import {useEmployees} from "../hooks/useEmployees"
import {EmployeesDataTable} from "../components/data-table/EmployeesDataTable"

export function EmployeesPage() {
	const {employees, isLoading, error} = useEmployees()

	if (error) {
		return <div>Error: {error.message}</div>
	}

	if (isLoading) {
		return <div className="skeleton" style={{height: "500px"}} />
	}

	if (!employees || employees.length === 0) {
		return <div>No employees found</div>
	}

	return <EmployeesDataTable employees={employees} />
}
