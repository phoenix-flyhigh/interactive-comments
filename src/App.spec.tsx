import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App tests", () => {
    it("Should render hello", () => {
        render(<App/>)

        expect(screen.getByText("Hello world")).toBeInTheDocument()
    })
})