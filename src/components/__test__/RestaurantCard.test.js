import { render, screen } from "@testing-library/react"
import RestaurantCard, { withVegLabel } from "../RestaurantCard"
import MOCK_DAATA from '../mocks/resCardMock.json'
import "@testing-library/jest-dom"
it('should render Restaurant Card component with props data', () => {
    render(<RestaurantCard resData = {MOCK_DAATA}/>)
    const name = screen.getByText("Kanti Sweets")

    expect(name).toBeInTheDocument()
})


it('should render Restaurant Card component with veg label', () => {
    const VegResCard = withVegLabel(RestaurantCard)
    // console.log(withVegResCard)
    render(<VegResCard resData = {MOCK_DAATA}/>)
    const label = screen.getByText("Vegeterian")

    expect(label).toBeInTheDocument()
})