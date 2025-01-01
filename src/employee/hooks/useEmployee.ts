import {useMutation} from "@/src/shared/hooks/useMutation"
import {
	getEmployeeById,
	updateEmployee as updateEmployeeRequest,
	createEmployee as createEmployeeRequest
} from "../domain"
import {Employee} from "../domain/types"
import {useQuery} from "@/src/shared/hooks/useQuery"

export function useEmployee({id}: {id?: string | number} = {}) {
	const {
		data: employee,
		isLoading: isLoadingEmployee,
		error: employeeError,
		refetch
	} = useQuery<Employee>({
		queryKey: `employee-${id}`,
		queryFn: () => getEmployeeById(id as string)
	})

	const {
		mutate: updateEmployee,
		isLoading: isUpdating,
		error: updateError
	} = useMutation<Employee>({
		mutationFn: (data: Employee) => updateEmployeeRequest(data.id, data),
		onSuccess: () => {
			window.alert("Employee updated successfully")
			refetch()
		},
		onError: () => {
			window.alert("Error updating employee")
			refetch()
		}
	})

	const {
		mutate: createEmployee,
		isLoading: isCreating,
		error: createError
	} = useMutation<Employee>({
		mutationFn: (data: Employee) => createEmployeeRequest(data),
		onSuccess: () => {
			window.alert("Employee created successfully")
			refetch()
		},
		onError: () => {
			window.alert("Error creating employee")
			refetch()
		}
	})

	const isLoading = isLoadingEmployee || isUpdating || isCreating
	const error = employeeError || updateError || createError

	return {
		employee,
		updateEmployee,
		createEmployee,
		isLoading,
		error
	}
}
