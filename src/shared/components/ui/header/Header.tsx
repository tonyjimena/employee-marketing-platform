import {useRouter} from "@/src/router/hooks/useRouter"
import "./styles.scss"
import { Link } from "@/src/router/components/Link"

export function Header() {
	const {currentPath} = useRouter()

	return (
		<header className="flex align-center gap-2 ">
			{currentPath !== "/" && (
				<div className="back-button" onClick={() => window.history.back()}>
					{"<"}
				</div>
			)}
			<div className="flex row gap-2 justify-between align-center w-full">
				<p>EMP</p>{" "}
				<Link href="/employees/create" className="button">
					Create employee
				</Link>
			</div>
		</header>
	)
}
