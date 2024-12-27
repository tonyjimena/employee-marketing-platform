import {createContext, ReactNode} from "react"
import {useEmployees} from "../hooks/useEmployees"

// UNUSED
export const DataContext = createContext({})

export const EmployeesContextProvider = ({children}: {children: ReactNode}) => {
	const {employees} = useEmployees()

	return (
		<DataContext.Provider value={{employees}}>{children}</DataContext.Provider>
	)
}
