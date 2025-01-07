import {EmployeeRole} from "../domain/types"

export function RoleTag({role}: {role: EmployeeRole | string}) {
	switch (role) {
		case EmployeeRole.User:
			return <div className="tag user">User</div>
		case EmployeeRole.Admin:
			return <div className="tag admin">Admin</div>
		case EmployeeRole.SuperAdmin:
			return <div className="tag superadmin">Superadmin</div>
		default:
			return <div className="tag">Unknown</div>
	}
}
