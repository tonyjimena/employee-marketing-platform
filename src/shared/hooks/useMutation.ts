import {useCallback, useState} from "react"
import {CustomError} from "../errors/types"

export function useMutation<T>({
	mutationFn,
	onSuccess,
	onError
}: {
	mutationFn: (data: T) => Promise<T>
	onSuccess?: () => void
	onError?: () => void
}) {
	const [data, setData] = useState<T | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<CustomError | null>(null)

	const mutate = useCallback(
		(data: T) => {
			setIsLoading(true)
			mutationFn(data)
				.then((data) => {
					setData(data as T)
					onSuccess?.()
				})
				.catch((error) => {
					setError(error)
					onError?.()
				})
				.finally(() => {
					setIsLoading(false)
				})
		},
		[mutationFn]
	)

	return {
		mutate,
		data,
		isLoading,
		error
	}
}
