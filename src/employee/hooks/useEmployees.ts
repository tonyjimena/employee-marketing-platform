import {useState, useEffect} from "react"
import {getEmployees} from "../domain"
import {Employee} from "../domain/types"

export function useEmployees() {
	const [employees, setEmployees] = useState<Employee[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		setIsLoading(true)
		getEmployees()
			.then((employees) => setEmployees(employees))
			.catch((error) => {
				setError(error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	return {
		employees,
		isLoading,
		error
	}
}
