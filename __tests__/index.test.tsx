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
        const getPlant = (): HTMLElement => {
            render(<Home/>)
            return screen.getByTestId('plant')
        }


        it('should contain name of plant', () => {
            const plant = getPlant();

            const planNameLabel = plant.querySelector("[data-testid='plant-name']");

            expect(planNameLabel.textContent).not.toBe('')
        })

        it('should contain photo of plant', () => {
            const plant = getPlant();

            const planNameLabel = plant.querySelector("[data-testid='plant-photo']");

            expect(planNameLabel.getAttribute('src')).not.toBe('')
        })

        it('should contain water period of plant in numeric days format', () => {
            const plant = getPlant();

            const planNameLabel = plant.querySelector("[data-testid='daysLeftToWater']");

            expect(Number(planNameLabel.textContent)).not.toBeNaN();
        })
        it('should contain water button', () => {
            const plant = getPlant();

            const waterButton = plant.querySelector("[data-testid='waterButton']");

            expect(waterButton).toBeInTheDocument()
        })
        it('should contain edit button', () => {
            const plant = getPlant();

            const waterButton = plant.querySelector("[data-testid='editButton']");

            expect(waterButton).toBeInTheDocument()
        })
        it('should contain remove button', () => {
            const plant = getPlant();

            const waterButton = plant.querySelector("[data-testid='removeButton']");

            expect(waterButton).toBeInTheDocument()
        })
    })


})
