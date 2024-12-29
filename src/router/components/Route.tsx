import {useRouter} from "../hooks/useRouter"

export function Route({
	path,
	component
}: {
	path: string
	component: (id?: string | number) => React.ReactNode
}) {
	const {currentPath} = useRouter()

	function pathToRegex(path: string) {
		const escapedPath = path.replace(/:[^\s/]+/g, "([\\w-]+)")
		return new RegExp(`^${escapedPath}$`)
	}

	const regex = pathToRegex(path)
	const match = currentPath.match(regex)
	const id = match ? match[1] : undefined

	return match ? component(id) : null
}
