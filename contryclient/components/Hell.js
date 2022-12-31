import React from 'react'
import { useSelector } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import {GiPlanetConquest,GiAirplaneDeparture} from "react-icons/gi"

const Hell = () => {
  const {countryQuery} = useSelector(state => state.countries)
  return (
    <Div>
      {
        !countryQuery? <h2>All Countries <GiPlanetConquest></GiPlanetConquest></h2>
        : <H2><GiAirplaneDeparture></GiAirplaneDeparture>{"  "}Searching...</H2>
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
    color: gray;
}
`;
const typing = keyframes`
from{width: 0;}
`;

const more = keyframes`
50%{border-color: transparent;}
`;

const H2 = styled.h2`
display : block;
white-space: nowrap;
border-right: 4px solid;
width: 13ch;
animation:${typing} 2s steps(13) infinite, ${more} 2s infinite step-end alternate;
overflow: hidden;
`;
