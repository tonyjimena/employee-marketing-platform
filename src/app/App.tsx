import {EmployeesPage} from "../employee/pages/employees"
import {EmployeeDetailPage} from "../employee/pages/employee"
import {Route} from "../router/components/Route"
import {MainLayout} from "../shared/layouts/MainLayout"
import { EditEmployeePage } from "../employee/pages/edit-employee"

export function App() {
	return (
		<MainLayout>
			<Route path="/" component={() => <EmployeesPage />} />
			<Route
				path="/employee/:id"
				component={(id) => <EmployeeDetailPage id={id as string} />}
			/>
			<Route
				path="/employee/:id/edit"
				component={(id) => <EditEmployeePage id={id as string} />}
			/>
		</MainLayout>
	)
}
