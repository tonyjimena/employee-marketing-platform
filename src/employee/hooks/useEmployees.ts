import {getEmployees} from "../domain"
import {Employee} from "../domain/types"
import {useQuery} from "@/src/shared/hooks/useQuery"

export function useEmployees() {
	const {
		data: employees,
		isLoading,
		error
	} = useQuery<Employee[]>({
		queryKey: "employees",
		queryFn: () => getEmployees()
	})

	return {
		employees,
		isLoading,
		error
	}
}
