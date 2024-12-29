import {Employee} from "../../domain/types"
import {EmployeesTableRow} from "./EmployeesTableRow"
import "./styles.scss"

export function EmployeesDataTable({employees}: {employees: Employee[]}) {
	return (
		<div className="data-table">
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
				<tbody>
					{employees.map((employee: Employee) => (
						<EmployeesTableRow key={employee.id} employee={employee} />
					))}
				</tbody>
			</table>
		</div>
	)
}
