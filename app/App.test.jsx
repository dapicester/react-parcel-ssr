import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom"
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
  test('navigation', () => {
    render(<App />, { wrapper: MemoryRouter })
    expect(screen.getByText(/this is the home page/i)).toBeInTheDocument()

    userEvent.click(screen.getByText('About'))
    expect(screen.getByText(/this is the about page/i)).toBeInTheDocument()
  })
})
