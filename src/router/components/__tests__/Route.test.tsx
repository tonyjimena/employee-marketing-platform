import {describe, expect} from "vitest"
import {render, screen} from "@testing-library/react"

import {Route} from "../Route"

describe("WHEN the Route is rendered", () => {
	it("should render the correct component", () => {
		render(<Route path="/" component={() => <div>PageComponent</div>} />)
		expect(screen.getByText(/PageComponent/i)).toBeDefined()
	})

	// it("should not render the component if the path does not match", () => {
	// 	render(<Route path="/employee/1" component={<div>PageComponent</div>} />)
	// 	expect(screen.queryByText(/PageComponent/i)).toBeNull()
	// })
})
