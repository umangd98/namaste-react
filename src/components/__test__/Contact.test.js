import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'

describe("Contact US Page Test case", () => {


    afterAll(() => {
        // console.log('After All')
    })

    beforeEach(() => {
        // console.log('Before Each')
    })

    // test or it are same
    it('Should load contact us component', () => {
        render(<Contact />)
    
        const heading =  screen.getByRole('heading')
        //assertion
    
        expect(heading).toBeInTheDocument()
    })
    
    
    test('Should load button inside contact component', () => {
        render(<Contact />)
    
        const button =  screen.getByRole('button')
        //assertion
    
        expect(button).toBeInTheDocument()
    })
    
    test('Should load input name inside contact component', () => {
        render(<Contact />)
    
        const inputName =  screen.getByPlaceholderText('name')
        //assertion
    
        expect(inputName).toBeInTheDocument()
    })
    
    
    test('Should load 2 input boxes inside contact component', () => {
        render(<Contact />)
    
       const inputBoxes = screen.getAllByRole('textbox')
        //assertion
    
        expect(inputBoxes.length).toBe(2)
    })

})


