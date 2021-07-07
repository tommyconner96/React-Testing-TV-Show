import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import App from './App'
import * as rtl from '@testing-library/react'

describe('App.js tests', () => {
 


  it('displays text of the opening paragraph', async () => {
    const { findByText } = rtl.render(<App />)
    const text = await findByText(/classics that captivated/i)
    expect(text).toBeInTheDocument()
    expect(text).toBeVisible()
  })

  it('displays "fetching data" when fetching data', () => {
    const { getByText } = rtl.render(<App />)
    expect(getByText(/fetching data/i)).toBeTruthy()
  })

  it('displays "select a season" after fetching data', async () => {
    const { findByText } = rtl.render(<App />)
    expect(await findByText(/select a season/i)).toBeTruthy()
  })

})