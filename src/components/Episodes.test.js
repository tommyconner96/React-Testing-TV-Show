import React from 'react'
import * as rtl from '@testing-library/react'
import fetchShow from '../api/fetchShow'
import Episodes from './Episodes'

jest.mock('../api/fetchShow')

describe('Episodes.js tests', () => {

  it('initially renders no seasons or episodes. when given episode data, it will display episodes and season', async () => {
    const mockShowData = [
      { 
        id: '1345345',
        image: 'img',
        name: 'name1',
        season: 1,
        number: 1,
        summary: 'text summary',
        runtime: 60
    },
    { 
      id: '1345346',
      image: 'img',
      name: 'name2',
      season: 1,
      number: 2,
      summary: 'text summary',
      runtime: 60
  },

    ]
    fetchShow.mockResolvedValueOnce(mockShowData)
    const { findByText, queryAllByText, rerender } = rtl.render(<Episodes episodes={[]}/>)
    expect(queryAllByText(/season/i) === null)
    rerender(<Episodes episodes={[mockShowData]}/>)
    expect(await findByText(/season/i)).toBeInTheDocument()
    expect(await findByText(/episode/i)).toBeInTheDocument()
    expect(await findByText(/season/i)).toBeVisible()
    expect(await findByText(/episode/i)).toBeVisible()

})

})
