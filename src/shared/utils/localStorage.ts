export function saveOnLocalStorage(key: string, value: unknown) {
	localStorage.setItem(key, JSON.stringify(value))
}

export function getFromLocalStorage(key: string) {
	const value = localStorage.getItem(key)
	return value ? JSON.parse(value) : null
}
