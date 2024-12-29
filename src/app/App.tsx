import {EmployeesPage} from "../employee/pages/employees"
import {EmployeeDetailPage} from "../employee/pages/employee"
import {Route} from "../router/components/Route"
import {MainLayout} from "../shared/layouts/MainLayout"

export function App() {
	return (
		<MainLayout>
			<Route path="/" component={() => <EmployeesPage />} />
			<Route
				path="/employee/:id"
				component={(id) => <EmployeeDetailPage id={id as string} />}
			/>
		</MainLayout>
	)
}
