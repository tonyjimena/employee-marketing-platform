export function InputField({
	name,
	label = name,
	type = "text",
	value,
	required = false
}: {
	label?: string
	name: string
	type?: string
	value?: string | number
	required?: boolean
}) {
	return (
		<div className="input-field">
			<label htmlFor={name}>{label} {required && <span className="required">*</span>}</label>
			<input type={type} name={name} defaultValue={value} required={required} />
		</div>
	)
}
