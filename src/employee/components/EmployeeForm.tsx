import {useEmployee} from "@/src/employee/hooks/useEmployee"
import {Button} from "@/src/shared/components/ui/button/Button"
import {InputField} from "@/src/shared/components/forms/input-field/InputField"
import {SelectField} from "@/src/shared/components/forms/select-field/SelectField"
import {InputImageField} from "@/src/shared/components/forms/image-field/ImageField"
import {Employee} from "../domain/types"
import {uuId} from "@/src/shared/utils/uuId"

export function EmployeeForm({employee}: {employee?: Employee}) {
	const {isLoading, updateEmployee, createEmployee} = useEmployee()

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		try {
			const formData = Object.fromEntries(new FormData(e.currentTarget))

			const data = {
				id: employee?.id || uuId(),
				firstName: String(formData.firstName),
				lastName: String(formData.lastName),
				email: String(formData.email),
				hireDate: String(formData.hireDate),
				dismissalDate: String(formData.dismissalDate),
				department: String(formData.department),
				salary: Number(formData.salary),
				picture: String(employee?.picture || undefined),
				role: String(formData.role)
			}

			if (employee?.id) {
				updateEmployee(data)
			} else {
				createEmployee(data)
			}
		} catch (error) {
			console.error("Error handling form submit ->", error)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<fieldset className="employee-detail" disabled={isLoading}>
				<div className="image">
					<InputImageField name="picture" value={employee?.picture || ""} />
				</div>
				<div className="flex column gap-1">
					<InputField
						label="First name"
						name="firstName"
						type="text"
						value={employee?.firstName || ""}
					/>
					<InputField
						label="Last name"
						name="lastName"
						type="text"
						value={employee?.lastName || ""}
					/>
					<InputField
						label="Email"
						name="email"
						type="email"
						value={employee?.email || ""}
					/>
					<SelectField
						label="Department"
						name="department"
						options={["Finance", "Engineering", "Customer Success"]}
						value={employee?.department || ""}
					/>
					<InputField
						label="Role"
						name="role"
						type="text"
						value={employee?.role || ""}
					/>
				</div>
				<div className="flex column gap-1">
					<InputField
						label="Total salary"
						name="salary"
						type="number"
						value={employee?.salary || ""}
					/>

					<InputField
						label="Hired on"
						name="hireDate"
						type="date"
						value={
							employee?.hireDate
								? new Date(employee.hireDate).toISOString().substring(0, 10)
								: ""
						}
					/>

					<InputField
						label="Dismissal date"
						name="dismissalDate"
						type="date"
						value={
							employee?.dismissalDate
								? new Date(employee.dismissalDate)
										.toISOString()
										.substring(0, 10)
								: ""
						}
					/>

					<SelectField
						label="Department"
						name="department"
						options={["Finance", "Engineering", "Customer Success"]}
						value={employee?.department || ""}
					/>
					<Button type="submit">{isLoading ? "Saving..." : "Save"}</Button>
				</div>
			</fieldset>
		</form>
	)
}
