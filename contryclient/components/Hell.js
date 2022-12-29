import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {GiPlanetConquest,GiAirplaneDeparture} from "react-icons/gi"

const Hell = () => {
  const {countryQuery} = useSelector(state => state.countries)
  return (
    <Div>
      {
        !countryQuery? <h2>All Countries <GiPlanetConquest></GiPlanetConquest></h2>
        : <h2><GiAirplaneDeparture></GiAirplaneDeparture>{"  "}Searching...</h2>
      }
      <hr />
    </Div>
  )
}

export default Hell

const Div = styled.div`
width: 77%;
margin: 10px auto;

h2{
    font-weight: bolder;
    align-items: center;
}
`;