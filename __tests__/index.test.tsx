/**
 * @jest-environment jsdom
 */
import {render, screen} from '@testing-library/react'
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
    it('open /add page on ADD button click', () => {
        render(<Home/>)

        const button = screen.getByRole('button', {
            name: /ADD/i,
        })
        button.click()
        render(<Add/>)

        const currentPathName = window.location.pathname

        expect(currentPathName).toContain('/add');
    })


})
