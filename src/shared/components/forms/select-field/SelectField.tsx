export function SelectField({
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
