import {Employee} from "../domain/types"
import {useEmployee} from "../hooks/useEmployee"
import {ErrorView} from "@/src/shared/errors/components"

export const EditEmployeePage = ({id}: {id: string | number}) => {
	const {employee, isLoading, error} = useEmployee({id: id})

	if (error) {
		return <ErrorView error={error} />
	}

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (!employee) {
		return <div>Employee not found</div>
	}

	const fullName = `${employee.firstName} ${employee.lastName}`

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)

		const data = Object.fromEntries(formData)

		alert(JSON.stringify(data))
	}

	return (
		<form className="employee-detail" onSubmit={handleSubmit}>
			<div className="image">
				<img
					alt={`${fullName} photo`}
					src={employee.picture}
					width="300"
					height="300"
				/>

				<InputField type="file" label="Picture" name="picture" />
			</div>
			<div className="flex column gap-1">
				<InputField
					label="First name"
					name="firstName"
					type="text"
					value={employee.firstName}
				/>
				<InputField
					label="Last name"
					name="lastName"
					type="text"
					value={employee.lastName}
				/>
				<InputField
					label="Email"
					name="email"
					type="email"
					value={employee.email}
				/>
				<InputSelectField
					label="Department"
					name="department"
					options={["Finance", "Engineering", "Customer Success"]}
					value={employee.department}
				/>
				<InputField
					label="Role"
					name="role"
					type="text"
					value={employee.role}
				/>

				<InputField
					label="Salary"
					name="salary"
					type="number"
					value={employee.salary}
				/>

				<InputField
					label="Hired on"
					name="hireDate"
					type="date"
					value={employee.hireDate}
				/>

				<InputField
					label="Dismissal date"
					name="dismissalDate"
					type="date"
					value={employee.dismissalDate || ""}
				/>

				<InputSelectField
					label="Department"
					name="department"
					options={["Finance", "Engineering", "Customer Success"]}
					value={employee.department}
				/>
			</div>
			<div>
				<button type="submit">Save</button>
			</div>
		</form>
	)
}

function InputField({
	name,
	label = name,
	type = "text",
	value
}: {
	label?: string
	name: string
	type?: string
	value?: string | number
}) {
	return (
		<div className="input-field">
			<label htmlFor={name}>{label}</label>
			<input type={type} name={name} defaultValue={value} />
		</div>
	)
}

function InputSelectField({
	label,
	name,
	options,
	value
}: {
	label: string
	name: string
	options: string[]
	value: string
}) {
	return (
		<div className="input-field">
			<label htmlFor={name}>{label}</label>
			<select name={name} defaultValue={value}>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	)
}

function EmployeeFormDataMapper(data: any): Employee {
	try {
		return {
			id: data.id,
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			hireDate: data.hireDate,
			dismissalDate: data.dismissalDate,
			department: data.department,
			salary: data.salary,
			picture: data.picture,
			role: data.role,
			totalSalary: data.totalSalary
		}
	} catch (error) {
		console.error("Error mapping employee form data ->", error)
		throw new Error("Error mapping employee form data")
	}
}
