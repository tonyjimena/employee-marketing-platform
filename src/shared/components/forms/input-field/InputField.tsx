export function InputField({
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
