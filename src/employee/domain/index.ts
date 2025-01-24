import fetcher from "@/src/shared/lib/fetcher"
import {Employee} from "./types"
import {ENDPOINTS} from "@/constants/Endpoints"
import {CustomError} from "@/src/shared/errors/types"

export async function getEmployees(): Promise<Employee[]> {
	try {
		const employees: Employee[] = await fetcher.get(ENDPOINTS.EMPLOYEES)
		return employees
	} catch (err) {
		const error = err as CustomError

		console.error("getEmployees error ->", error)
		throw new Error("Error fetching employees")
	}
}

export async function getEmployeeById(id: string | number): Promise<Employee> {
	try {
		const employee: Employee = await fetcher.get(ENDPOINTS.EMPLOYEES + `/${id}`)
		return employee
	} catch (err) {
		const error = err as CustomError
		console.error("getEmployee error ->", error)
		throw new CustomError(error.message, error.status || 500)
	}
}

export async function updateEmployee(
	id: string | number,
	data: Employee
): Promise<Employee> {
	try {
		const employee: Employee = await fetcher.post(
			ENDPOINTS.EMPLOYEES + `/${id}`,
			data,
			{
				headers: {
					"Content-Type": "multipart/form-data"
				}
			}
		)
		return employee
	} catch (err) {
		const error = err as CustomError
		console.error("updateEmployee error ->", error)
		throw new CustomError(error.message, error.status || 500)
	}
}

export async function createEmployee(data: Employee): Promise<Employee> {
	try {
		const employee: Employee = await fetcher.post(ENDPOINTS.EMPLOYEES, data, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		})
		return employee
	} catch (err) {
		const error = err as CustomError
		console.error("createEmployee error ->", error)
		throw new CustomError(error.message, error.status || 500)
	}
}
