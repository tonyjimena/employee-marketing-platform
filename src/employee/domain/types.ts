export type Employee = {
	id: string
	firstName: string
	lastName: string
	hireDate: string
	email: string
	salary: number
	role: string
	picture: string | File
	dismissalDate: string | null
	department: string
}

export enum EmployeeRole {
	User = "user",
	Admin = "admin",
	SuperAdmin = "superadmin"
}

export enum EmployeeDepartment {
	Finance = "finance",
	Engineering = "engineering",
	CustomerSuccess = "customer success"
}
