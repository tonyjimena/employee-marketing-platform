import fetcher from "@/src/shared/lib/fetcher"
import { Employee } from "./types"

export async function getEmployees(): Promise<Employee[]> {
	try {
		const employees: Employee[] = await fetcher.get("/employees")
		return employees
	} catch (error) {
		console.error("getEmployees error ->", error)
		throw new Error("Error fetching employees")
	}
}

export async function getEmployeeById(id: number): Promise<Employee> {
	try {
		const employee: Employee = await fetcher.get(`/employees/${id}`)
		return employee
	} catch (error) {
		console.error("getEmployee error ->", error)
		throw new Error("Error fetching employee")
	}
}
