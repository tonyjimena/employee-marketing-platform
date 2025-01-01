import {useState} from "react"

export function InputImageField({name, value}: {name: string; value: string}) {
	const [file, setFile] = useState<File | null>()

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0]
		setFile(file)
	}

	return (
		<div className="input-field">
			<label htmlFor={name}>Picture</label>
			<input type="file" name={name} onChange={handleChange} />
			<img
				alt={`${file?.name || name} photo`}
				src={file ? URL.createObjectURL(file) : value}
				width="300"
				height="300"
			/>
		</div>
	)
}
