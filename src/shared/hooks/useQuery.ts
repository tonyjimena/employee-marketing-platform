import {useEffect, useState} from "react"
import {getFromLocalStorage, saveOnLocalStorage} from "../utils/localStorage"

export function useQuery<T>({
	queryKey,
	queryFn
}: {
	queryKey: string
	queryFn: () => Promise<unknown>
}) {
	const [data, setData] = useState<T>(getFromLocalStorage(queryKey))
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		setIsLoading(!data)
		queryFn()
			.then((data) => {
				setData(data as T)
				saveOnLocalStorage(queryKey, data)
			})
			.catch((error) => {
				setError(error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	return {
		data,
		isLoading,
		error
	}
}
