import {getEmployeeById} from "../domain"
import {Employee} from "../domain/types"
import {useQuery} from "@/src/shared/hooks/useQuery"

export function useEmployee({id}: {id: number}) {
	const {
		data: employee,
		isLoading,
		error
	} = useQuery<Employee>({
		queryKey: `employee-${id}`,
		queryFn: () => getEmployeeById(id)
	})

	return {
		employee,
		isLoading,
		error
	}
}
