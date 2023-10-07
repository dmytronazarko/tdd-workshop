/**
 * @jest-environment jsdom
 */
import {render, screen, waitFor} from '@testing-library/react'
import Home from '@/pages/index'
import Add from "@/pages/add";

describe('Home', () => {
    it('renders a button ADD', () => {
        render(<Home/>)

        const button = screen.getByRole('button', {
            name: /ADD/i,
        })

        expect(button).toBeInTheDocument()
    })



    it('open /add page on ADD button click', async () => {
        render(<Home/>)

        const button = screen.getByLabelText('add-link')
        button.click()

        render(<Add/>)
        expect(screen.getByTestId('add-plant')).toBeInTheDocument()
    })

    describe('Plants list', () => {
        it('should contain at least single plant on home page', () => {
            render(<Home/>)

            const plants = screen.getAllByTestId('plant')

            expect(plants.length).toBeGreaterThanOrEqual(1)
        })
    })

    describe('Plant card', () => {
        const getPlant = () => {
            render(<Home/>)
            return screen.getByTestId('plant')
        }


        it('should contain name of plant', () => {
            const plant = getPlant();
            expect(plant)
        })

        it('should contain photo of plant', () => {})

        it('should contain interval of plant', () => {})
        it('should contain water button', () => {})
        it('should contain edit button', () => {})
        it('should contain remove button', () => {})
    })


})
