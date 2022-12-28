import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Hell = () => {
  const {countryQuery} = useSelector(state => state.countries)
  return (
    <Div>
      {
        !countryQuery? <h2>All Countries</h2>
        : <h2>Searching...</h2>
      }
    </Div>
  )
}

export default Hell

const Div = styled.div`
width: 77%;
margin: 10px auto;

h2{
    font-weight: bolder;
}
`;