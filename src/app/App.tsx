import {EmployeesPage} from "../employee/pages/employees"
import {EmployeeDetailPage} from "../employee/pages/employee"
import {Route} from "../router/components/Route"

export function App() {
	return (
		<main>
			<EmployeesManagerPlatformHeader />
			<Route path="/" component={<EmployeesPage />} />
			<Route path="/employee/:id" component={<EmployeeDetailPage />} />
		</main>
	)
}

const EmployeesManagerPlatformHeader = () => {
	return (
		<h1
			style={{
				textAlign: "center",
				fontSize: "24px",
				fontWeight: "bold",
				marginBottom: "20px"
			}}
		>
			Employee Management Platform
		</h1>
	)
}
