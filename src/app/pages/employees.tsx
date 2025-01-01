import {useEmployees} from "@/src/employee/hooks/useEmployees"
import {EmployeesDataTable} from "@/src/employee/components/data-table/EmployeesDataTable"
import {ErrorView} from "@/src/shared/errors/components"

export function EmployeesPage() {
	const {employees, isLoading, error} = useEmployees()

	if (error) {
		return <ErrorView error={error} />
	}

	if (isLoading) {
		return <div className="skeleton" style={{height: "500px"}} />
	}

	if (!employees || employees.length === 0) {
		return <div>No employees found</div>
	}

	return <EmployeesDataTable employees={employees} />
}
