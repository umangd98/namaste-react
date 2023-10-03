import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DAATA from '../mocks/mockResListData.json'
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DAATA)
        }
    })
})

it("should render the body component with search bar ", async () => {
    //act function is required if component involves state update, and async operatoins. 
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))

    const cardsInit = screen.getAllByTestId("resCard")
    expect(cardsInit.length).toBe(20)

    const searchBtn = screen.getByRole("button", {name: "Search"})

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, {
        target: {value: "burger"}
    })

    fireEvent.click(searchBtn)

    // console.log(searchInput)

    //screen should load 2 cards 
    const resCards = screen.getAllByTestId("resCard")

    expect(resCards.length).toBe(2)
})


it("should render the body component with top rated restaurants ", async () => {
    //act function is required if component involves state update, and async operatoins. 
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))

    // const cardsInit = screen.getAllByTestId("resCard")
    // expect(cardsInit.length).toBe(20)

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"})


    fireEvent.click(topRatedBtn)

    // console.log(searchInput)

    //screen should load 2 cards 
    const resCards = screen.getAllByTestId("resCard")


    // console.log(resCards)

    expect(resCards.length).toBe(18)
})

