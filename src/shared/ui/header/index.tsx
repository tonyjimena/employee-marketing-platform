import {useRouter} from "@/src/router/hooks/useRouter"
import "./styles.scss"
import {Link} from "@/src/router/components/Link"

export function Header() {
	const {currentPath} = useRouter()

	return (
		<header className="flex align-center gap-2 ">
			{currentPath !== "/" && (
				<Link href="/" className="back-button">
					{"<"}
				</Link>
			)}

			<p>EMP</p>
		</header>
	)
}
