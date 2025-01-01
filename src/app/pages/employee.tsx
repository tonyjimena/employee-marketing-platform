import {DepartamentWithIcon} from "@/src/employee/components/DepartmentWithIcon"
import {EmployeeRoleTag} from "@/src/employee/components/EmployeeRoleTag"
import {useEmployee} from "@/src/employee/hooks/useEmployee"
import { Link } from "@/src/router/components/Link"
import {ErrorView} from "@/src/shared/errors/components"

export const EmployeeDetailPage = ({id}: {id: string}) => {
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

	const fullName = `${employee.firstName} ${employee.lastName}`

	return (
		<div className="employee-detail">
			<div className="image">
				<img
					alt={`${fullName} photo`}
					src={employee.picture as string}
					width="300"
					height="300"
				/>
			</div>
			<div className="flex column gap-1">
				<div className="flex column">
					<h2>{fullName}</h2>
					<a href={`mailto:${employee.email}`}>{employee.email}</a>
				</div>
				<DepartamentWithIcon department={employee.department} />
				<div>
					<p className="font-bold">Salary:</p>
					<p>{employee.salary} €</p>
				</div>

				<div>
					{employee.hireDate ? (
						<p>Hired on {employee.hireDate.substring(0, 10)}</p>
					) : null}
				</div>
				<div>
					{employee.dismissalDate ? (
						<p>Dismissed {employee.dismissalDate.substring(0, 10)}</p>
					) : (
						<p>Currently hired</p>
					)}
				</div>
				<EmployeeRoleTag role={employee.role} />

				<Link href={`/employee/${employee.id}/edit`}>
					Edit employee
				</Link>
			</div>
		</div>
	)
}
