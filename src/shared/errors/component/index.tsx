import {CustomError} from "../types"
import "./styles.scss"
export function ErrorComponent({error}: {error: CustomError}) {
	return (
		<div className="error-container">
			<h2>{error.status || "Ups!"}</h2>

			<p>
				{error.message ||
					"Parece que hemos tenido un problema, intentalo de nuevo más tarde."}
			</p>
		</div>
	)
}
