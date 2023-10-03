import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import '@testing-library/jest-dom'
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"


describe("Header Component Test Cases", () => {
    it("Should load header component with login button", () => {
        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        )
        const loginButton = screen.getByRole("button", {name: "Login"})
        // const loginButton = screen.getByText("Login")

        expect(loginButton).toBeInTheDocument()
        })

        it("Should load header component with cart items zero", () => {
            render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
            )
         
            const cartItems = screen.getByText("Cart - (0)")
    
            expect(cartItems).toBeInTheDocument()
            })

        it("Should load header component with change login button to logout on click", () => {
            render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
            )
            
            const loginButton = screen.getByRole("button", {name: "Login"})
            fireEvent.click(loginButton)
            const logoutButton = screen.getByRole("button", {name: "Logout"})

            expect(logoutButton).toBeInTheDocument()
            })
})