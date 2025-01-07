import {useRouter} from "@/src/router/hooks/useRouter"
import {Employee} from "../../domain/types"
import { RoleTag } from "../RoleTag"

export function EmployeesTableRow({employee}: {employee: Employee}) {
	const {navigate} = useRouter()

	function getDaysSince(date: string): string {
		const d = Number(new Date().getTime() - new Date(date).getTime())
		const calc = Math.floor(d / 86400000)
		return `${calc} ${calc > 1 ? "days" : "day"} ago`
	}

	return (
		<tr onClick={() => navigate(`/employee/${employee.id}`)}>
			<td>
				{employee.dismissalDate
					? "(Dismissed) " + employee.firstName + " " + employee.lastName
					: employee.firstName + " " + employee.lastName}
			</td>
			<td>{getDaysSince(employee.hireDate)}</td>
			<td>{employee.email}</td>
			<td>{employee.salary + " €"}</td>
			<td>
				<RoleTag role={employee.role} />
			</td>
		</tr>
	)
}

