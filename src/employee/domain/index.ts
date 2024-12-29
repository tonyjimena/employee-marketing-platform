import fetcher from "@/src/shared/lib/fetcher"
import {Employee} from "./types"
import {ENDPOINTS} from "@/constants/Endpoints"
import {CustomError} from "@/src/shared/errors/types"

export async function getEmployees(): Promise<Employee[]> {
	try {
		const employees: Employee[] = await fetcher.get(ENDPOINTS.EMPLOYEES)
		return employees
	} catch (error) {
		console.error("getEmployees error ->", error)
		throw new Error("Error fetching employees")
	}
}

export async function getEmployeeById(id: string | number): Promise<Employee> {
	try {
		const employee: Employee = await fetcher.get(ENDPOINTS.EMPLOYEES + `/${id}`)
		return employee
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error("getEmployee error ->", error)
		throw new CustomError(error.message, error.status)
	}
}
