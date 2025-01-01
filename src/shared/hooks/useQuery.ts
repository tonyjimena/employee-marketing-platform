import {useCallback, useEffect, useState} from "react"
import {getFromLocalStorage, saveOnLocalStorage} from "../utils/localStorage"
import {CustomError} from "../errors/types"

export function useQuery<T>({
	queryKey,
	queryFn
}: {
	queryKey: string
	queryFn: () => Promise<T>
}) {
	const [data, setData] = useState<T>(getFromLocalStorage(queryKey))
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<CustomError | null>(null)

	const getData = useCallback(() => {
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
	}, [queryFn, queryKey, data])

	useEffect(() => {
		getData()
	}, [])

	return {
		data,
		isLoading,
		error,
		refetch: getData
	}
}
