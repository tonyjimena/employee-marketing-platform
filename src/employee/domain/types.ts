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

// export class Employee {
// 	public id!: string
// 	public firstName!: string
// 	public lastName!: string
// 	public email!: string
// 	public hireDate!: Date
// 	public dismissalDate!: Date | null
// 	public department!: "finance" | "engineering" | "customer success"
// 	public salary!: number
// 	public picture!: string
// 	public role!: "user" | "admin" | "superadmin"
// }

export enum EmployeeRole {
	User = "user",
	Admin = "admin",
	SuperAdmin = "superadmin"
}
