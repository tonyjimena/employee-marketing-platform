import {createContext, ReactNode} from "react"
import {Employee} from "../domain/types"

export const DataContext = createContext({})

export const DataProvider = ({
	children,
	employee
}: {
	children: ReactNode
	employee: Employee | null
}) => {
	return (
		<DataContext.Provider value={{employee}}>{children}</DataContext.Provider>
	)
}
