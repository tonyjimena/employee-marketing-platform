import {useRouter} from "../hooks/useRouter"

export function Route({
	path,
	component
}: {
	path: string
	component: React.ReactNode
}) {
	const {currentPath} = useRouter()

	function pathToRegex(path: string) {
		const escapedPath = path.replace(/:[^\s/]+/g, "([\\w-]+)")
		return new RegExp(`^${escapedPath}$`)
	}

	const regex = pathToRegex(path)

	return regex.test(currentPath) ? component : null
}
