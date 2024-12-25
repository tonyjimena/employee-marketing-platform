import {useEffect, useState} from "react"

export function useRouter() {
	const route = window.location.href
	const [path, setPath] = useState(route)

	useEffect(() => {
		console.log(route)
		setPath(route)
	}, [route])

	const navigate = (path: string) => {
		window.history.pushState({}, "", path)
		setPath(path)
	}

	return {path, navigate}
}
