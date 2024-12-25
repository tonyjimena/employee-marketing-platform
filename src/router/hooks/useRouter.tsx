import {useEffect, useState} from "react"

export function useRouter() {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

	function navigate(href: string) {
		window.history.pushState({}, "", href)
		const navigationEvent = new PopStateEvent("navigate")
		window.dispatchEvent(navigationEvent)
	}

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname)
		}
		window.addEventListener("navigate", onLocationChange)
		window.addEventListener("popstate", onLocationChange)
		return () => {
			window.removeEventListener("navigate", onLocationChange)
			window.removeEventListener("popstate", onLocationChange)
		}
	}, [])

	return {currentPath, navigate}
}
