import {render, screen} from "@testing-library/react"
import {EmployeeDetailPage} from "../employee"
import {describe, expect, vi} from "vitest"
import * as useEmployeeHook from "@/src/employee/hooks/useEmployee"

const employee = {
	id: "1",
	firstName: "John",
	lastName: "Doe",
	email: "john.doe@emp.com",
	hireDate: "2023-01-15",
	dismissalDate: null,
	department: "engineering",
	salary: 50000,
	picture: "/backend/src/assets/profile2.jpg",
	role: "user"
}

describe("WHEN the page loads initially", () => {
	const useProductsSpy = vi.spyOn(useEmployeeHook, "useEmployee")

	useProductsSpy.mockReturnValue({
		employee: employee,
		isLoading: false,
		error: null,
		updateEmployee: vi.fn(),
		createEmployee: vi.fn()
	})

	it("shows the employee details", () => {
		render(<EmployeeDetailPage id={employee.id} />)

		expect(screen.getByText(/John Doe/i)).toBeDefined()
		expect(screen.getByText(/john.doe@emp.com/i)).toBeDefined()

		expect(screen.getByText(/50000 €/i)).toBeDefined()

		expect(screen.getByText(/User/i)).toBeDefined()
		expect(screen.getByText(/Currently hired/i)).toBeDefined()

		expect(screen.getByText(/Edit employee/i)).toBeDefined()
	})
})
