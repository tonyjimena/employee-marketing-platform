import {describe, expect} from "vitest"
import {render, screen, fireEvent} from "@testing-library/react"

import {Link} from "../Link"

describe("WHEN the Link component is rendered", () => {
	it("should render the children", () => {
		render(<Link href="/">Home</Link>)
		expect(screen.getByText(/Home/i)).toBeDefined()
	})

	it("should navigate to the href", () => {
		render(<Link href="/employee/1">Home</Link>)
		fireEvent.click(screen.getByText(/Home/i))
		expect(window.location.pathname).toBe("/employee/1")
	})
})
