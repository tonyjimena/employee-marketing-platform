import fetcher from "@/src/shared/lib/fetcher"
import {Employee} from "./types"
import {ENDPOINTS} from "@/constants/Endpoints"

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
	} catch (error) {
		console.error("getEmployee error ->", error)
		throw new Error("Error fetching employee")
	}
}
