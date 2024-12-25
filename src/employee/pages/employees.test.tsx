import { render, screen } from '@testing-library/react';
import {EmployeeDetailPage} from './employee';
import { vi, expect } from 'vitest';

test('renders', () => {
  render(<EmployeeDetailPage employee={0} handleGoToEmployeesPage={vi.fn()}/>);
  expect(screen.getByText(/Role/i)).toBeDefined();
});