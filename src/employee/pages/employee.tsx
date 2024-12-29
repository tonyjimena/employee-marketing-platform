import {Link} from "@/src/router/components/Link"
import {useEmployee} from "../hooks/useEmployee"

export const EmployeeDetailPage = ({id}: {id: string}) => {
	const {employee, isLoading, error} = useEmployee({id: id})

	if (error) {
		return <div>Error: {error.message}</div>
	}

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (!employee) {
		return <div>Employee not found</div>
	}

	const {
		id: employeeId,
		picture,
		firstName,
		lastName,
		email,
		role,
		department,
		salary,
		hireDate,
		dismissalDate
	} = employee || {}

	const dateOfHire = hireDate ? hireDate.substring(0, 10) : "Unknown"
	const dateOfDismissal = dismissalDate
		? dismissalDate.substring(0, 10)
		: "Currently hired"

	return (
		<div>
			<Link href="/" className="button">
				Click here to go back
			</Link>
			<div className="employee">
				<div>{employeeId}</div>
				<div className="imageWrapper">
					<img src={picture} width={"250px"} height={"250px"} />
				</div>
				<div className="EmployeeDetailPageGroup">
					<div>
						<div>Name:</div>
						<div>{firstName}</div>
					</div>
					<div>
						<div>Last name:</div>
						<div>{lastName}</div>
					</div>
					<div>
						<div>Email:</div>
						<div>{email}</div>
					</div>
				</div>
				<div className="EmployeeDetailPageGroup">
					<div>
						<div>Role:</div>
						<EmployeeRoleTag role={role} />
					</div>
					<div>
						<div>Department:</div>
						<DepartamentWithIcon department={department} />
					</div>
					<div>
						<div>Salary:</div>
						<div>{salary} €</div>
					</div>
				</div>
				<div className="EmployeeDetailPageGroup">
					<div>
						<div>Hired on:</div>
						<div>{dateOfHire}</div>
					</div>
					<div>
						<div>Dismissal date:</div>
						<div>{dateOfDismissal}</div>
					</div>
				</div>
				{/* <div className='EmployeeDetailPageGroup'></div> */}
			</div>
		</div>
	)
}

function EmployeeRoleTag({role}: {role: string}) {
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

function DepartamentWithIcon({department}: {department: string}) {
	if (department == "customer success") {
		return (
			<div className="departament">
				<div className="material-icons">support_agent</div>
				Customer Success
			</div>
		)
	} else if (department == "engineering") {
		return (
			<div className="departament">
				<div className="material-icons">computer</div>
				IT
			</div>
		)
	} else if (department == "finance") {
		return (
			<div className="departament">
				<div className="material-icons">account_balance</div>
				Finance
			</div>
		)
	}

	return <div>{department}</div>
}
