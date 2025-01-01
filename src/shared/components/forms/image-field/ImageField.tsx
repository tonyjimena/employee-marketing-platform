import {useState} from "react"

const PLACEHOLDER = "https://placehold.co/300x300/EEE/31343C"

export function InputImageField({name, value, required=false}: {name: string; value: string; required?: boolean}) {
	const [file, setFile] = useState<File | null>()

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0]
		setFile(file)
	}

	return (
		<div className="input-field">
			{/* <label htmlFor={name}>Picture</label> */}
			<img
				alt={`${file?.name || name} photo`}
				src={file ? URL.createObjectURL(file) : value || PLACEHOLDER}
				width="300"
				height="300"
			/>
			<input type="file" name={name} onChange={handleChange} required={required} />
		</div>
	)
}
