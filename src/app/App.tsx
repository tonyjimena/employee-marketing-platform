import {EmployeesPage} from "@/src/app/pages/employees"
import {EmployeeDetailPage} from "@/src/app/pages/employee"
import {Route} from "@/src/router/components/Route"
import {MainLayout} from "@/src/shared/layouts/MainLayout"
import {EditEmployeePage} from "@/src/app/pages/edit-employee"
import {CreateEmployeePage} from "./pages/create-employee"

export function App() {
	return (
		<MainLayout>
			<Route path="/" component={() => <EmployeesPage />} />
			<Route path="/employees/create" component={() => <CreateEmployeePage />} />
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
