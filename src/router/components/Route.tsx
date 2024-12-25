import {useRouter} from "../hooks/useRouter"

export function Route({
	path,
	component
}: {
	path: string
	component: React.ReactNode
}) {
	const {currentPath} = useRouter()

	if (path.includes("/:")) {
		const paramName = path.split("/:")[1]
		const pathWithoutParam = path.replace(`/:${paramName}`, "")

		return currentPath.includes(pathWithoutParam) ? component : null
	}

	return currentPath === path ? component : null
}
