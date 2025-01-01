export function SelectField({
	label,
	name,
	options,
	value,
	required = false
}: {
	label: string
	name: string
	options: string[]
	value: string
	required?: boolean
}) {
	return (
		<div className="input-field">
			<label htmlFor={name}>{label} {required && <span className="required">*</span>}</label>
			<select name={name} defaultValue={value} required={required}>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	)
}
