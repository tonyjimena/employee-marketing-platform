import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.scss'

import {EmployeesPage} from '@/employee/pages/employees'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmployeesPage />
  </StrictMode>,
)
