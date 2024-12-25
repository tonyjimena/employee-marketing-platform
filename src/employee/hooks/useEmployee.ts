import {useState, useEffect} from "react"
import {getEmployeeById} from "../domain"
import {Employee} from "../domain/types"

export function useEmployee({id}: {id: number}) {
	const [employee, setEmployee] = useState<Employee>()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		setIsLoading(true)
		getEmployeeById(id)
			.then((employee) => setEmployee(employee))
			.catch((error) => {
				setError(error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [id])

	return {
		employee,
		isLoading,
		error
	}
}
