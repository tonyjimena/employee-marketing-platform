import {EmployeesPage} from "../employee/pages/employees"
import {EmployeeDetailPage} from "../employee/pages/employee"
import {DataProvider} from "../employee/contexts/Context"
import {useRouter} from "../router/useRouter"
import {RouterContext} from "../router/context"

export function App() {
	return (
		<RouterContext.Provider value={{}}>
			<DataProvider employee={null}>
				<EmployeesManagerPlatformHeader />
				{Router()}
			</DataProvider>
		</RouterContext.Provider>
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

function Router() {
	const {path} = useRouter()

	if (path.includes("employee")) {
		return <EmployeeDetailPage id={Number(path.split("/")[2])} />
	}

	return <EmployeesPage />

	return <div>Page not found</div>
}
