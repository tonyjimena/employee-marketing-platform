import {render, screen} from "@testing-library/react"
import {EmployeeDetailPage} from "../employee"
import {describe, expect, vi} from "vitest"
import * as useEmployeeHook from "@/src/employee/hooks/useEmployee"

const employee = {
	id: 1,
	firstName: "John",
	lastName: "Doe",
	email: "john.doe@emp.com",
	hireDate: "2023-01-15",
	dismissalDate: null,
	department: "engineering",
	salary: 50000,
	picture: "/backend/src/assets/profile2.jpg",
	role: "user",
	totalSalary: 50000
}

describe("WHEN the page loads initially", () => {
	const useProductsSpy = vi.spyOn(useEmployeeHook, "useEmployee")

	useProductsSpy.mockReturnValue({
		employee: employee,
		isLoading: false,
		error: null
	})

	it("shows the employee details", () => {
		render(<EmployeeDetailPage id={1} />)

		expect(screen.getByText(/john.doe@emp.com/i)).toBeDefined()
		expect(screen.getByText(/Hired on:/i)).toBeDefined()
	})
})
