export function EmployeeRoleTag({role}: {role: string}) {
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
