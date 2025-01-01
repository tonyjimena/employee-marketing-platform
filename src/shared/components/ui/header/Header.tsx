import {useRouter} from "@/src/router/hooks/useRouter"
import "./styles.scss"

export function Header() {
	const {currentPath} = useRouter()

	return (
		<header className="flex align-center gap-2 ">
			{currentPath !== "/" && (
				<div
					className="back-button"
					onClick={() => window.history.back()}
				>
					{"<"}
				</div>
			)}

			<p>EMP</p>
		</header>
	)
}
