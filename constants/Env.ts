const { BASE_URL, VITE_API_BASE_URL, API_KEY } = import.meta.env

if (!VITE_API_BASE_URL) {
	throw new Error("VITE_API_BASE_URL is not defined")
}

export const Env = {
	BASE_URL,
	VITE_API_BASE_URL,
	API_KEY
}
