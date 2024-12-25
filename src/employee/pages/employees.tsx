import React from "react"

import {Employee} from "../domain/types"
import {useEmployees} from "../hooks/useEmployees"
import {useRouter} from "@/src/router/hooks/useRouter"

export const EmployeesPage = (): React.ReactElement => {
	const {employees, isLoading, error} = useEmployees()

	if (error) {
		return <div>Error: {error.message}</div>
	}

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Days since hired</th>
					<th>Email</th>
					<th>Salary</th>
					<th>Role</th>
				</tr>
			</thead>
			<EmployeesBodyTable employees={employees} />
		</table>
	)
}

function EmployeesBodyTable({employees}: {employees: Employee[]}) {
	const { navigate } = useRouter()
	
	const roleTag = (role: string) => {
		if (role == "user") {
			return <div className="tag user">User</div>
		} else if (role == "admin") {
			return <div className="tag admin">Admin</div>
		} else if (role == "superadmin") {
			return <div className="tag superadmin">Superadmin</div>
		} else {
			return <div className="tag">Unknown</div>
		}
	}

	return (
		<tbody>
			{!!employees.length &&
				employees.map((employee: Employee) => {
					const d = Number(
						new Date().getTime() - new Date(employee.hireDate).getTime()
					)
					const date = String(Math.floor(d / 86400000))
					const daysSinceHireDate = date + " " + "days ago"
					const employeeEmail = employee.email

					const number = String(employee.salary)

					return (
						<tr
							key={employee.id}
							onClick={() => navigate(`/employee/${employee.id}`)}
						>
							<td>
								{employee.dismissalDate
									? "(Dismissed) " +
									  employee.firstName +
									  " " +
									  employee.lastName
									: employee.firstName + " " + employee.lastName}
							</td>
							<td>{daysSinceHireDate}</td>
							<td>{employeeEmail}</td>
							<td>{number + " €"}</td>
							<td>{roleTag(employee.role)}</td>
							<td>{employee.totalSalary}</td>
						</tr>
					)
				})}
		</tbody>
	)
}
