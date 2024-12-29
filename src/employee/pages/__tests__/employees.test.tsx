import {render, screen} from "@testing-library/react"
import {describe, expect, vi} from "vitest"
import * as useEmployeesHook from "@/src/employee/hooks/useEmployees"
import {EmployeesPage} from "../employees"

const employees = [
	{
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
	},
	{
		id: 2,
		firstName: "Jane",
		lastName: "Smith",
		email: "jane.smith@emp.com",
		hireDate: "2023-02-20",
		dismissalDate: null,
		department: "finance",
		salary: 55000,
		picture: "/backend/src/assets/profile1.jpg",
		role: "admin",
		totalSalary: 55000
	}
]

describe("WHEN the page loads initially", () => {
	const useProductsSpy = vi.spyOn(useEmployeesHook, "useEmployees")

	useProductsSpy.mockReturnValue({
		employees: employees,
		isLoading: false,
		error: null
	})

	it("shows the employees list", () => {
		render(<EmployeesPage />)

		expect(screen.getByRole("table")).toBeDefined()
		expect(screen.getByText(/john.doe@emp.com/i)).toBeDefined()
		expect(screen.getByText(/jane.smith@emp.com/i)).toBeDefined()
	})
})
