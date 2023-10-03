import { fireEvent, render, screen } from '@testing-library/react'
import RestaurantMenu from '../../components/RestaurantMenu'
import { act } from "react-dom/test-utils"
import { BrowserRouter } from 'react-router-dom'
import MOCK_DATA from '../mocks/mockResMenu.json'
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import '@testing-library/jest-dom'
import Header from '../Header'
import Cart from '../Cart'



global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

it("should load restaurant menu component", async () => {


    await act(async ()=> 
        render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
        </Provider>
    </BrowserRouter>

            )
    )
    const accordionHeader = screen.getByText("Recommended (19)")
    // fireEvent.click(accordionHeader)

    const addBtns = screen.getAllByRole("button", {name: "ADD"})

    fireEvent.click(addBtns[0])

    // fireEvent.click(addBtns[1])
    
    


    expect(screen.getAllByTestId("fooditems").length).toBe(20)

    expect(screen.getByText("Cart - (1)")).toBeInTheDocument()

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}))



    expect(screen.getAllByTestId("fooditems").length).toBe(19)

    expect(screen.getByText("Cart - (0)")).toBeInTheDocument()


})
