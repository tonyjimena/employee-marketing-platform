import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.scss'

import {EmployeesPage} from '@/src/employee/pages/employees'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmployeesPage />
  </StrictMode>,
)
