export function DepartamentWithIcon({department}: {department: string}) {
	if (department == "customer success") {
		return (
			<div className="department">
				<div className="material-icons">support_agent</div>
				Customer Success
			</div>
		)
	} else if (department == "engineering") {
		return (
			<div className="department">
				<div className="material-icons">computer</div>
				IT
			</div>
		)
	} else if (department == "finance") {
		return (
			<div className="department">
				<div className="material-icons">account_balance</div>
				Finance
			</div>
		)
	}

	return <div>{department}</div>
}
