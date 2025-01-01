import {useEmployee} from "@/src/employee/hooks/useEmployee"
import {ErrorView} from "@/src/shared/errors/components"

import {EmployeeForm} from "@/src/employee/components/EmployeeForm"

export const EditEmployeePage = ({id}: {id: string | number}) => {
	const {employee, isLoading, error} = useEmployee({id: id})

	if (error) {
		return <ErrorView error={error} />
	}

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (!employee) {
		return <div>Employee not found</div>
	}

	return <EmployeeForm employee={employee} />
}
