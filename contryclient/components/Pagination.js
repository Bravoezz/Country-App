import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Pagination = ({ pag, setPag }) => {
    const {allCount} = useSelector(state => state.countries) 
let array = []

for (let i = 0; i < allCount.length; i += 15) {
    array.push(i/15)
}

const handleClick = (e) => {
    setPag(e * 15)
  };
  const handlePrev = () => {
    if (!(pag <= 0)) setPag(pag - 15);
  };
  const handleNext = () => {
    if(pag ===240) return;
    setPag(pag + 15);
  };
  return (
    <ContPag>
      <button onClick={handlePrev}>Prev</button>
      {
        allCount.length? array.map(
            e => <ButtonPag current={e} key={e} onClick={()=>handleClick(e)}>{e +1 }</ButtonPag>
        )
        
        : null
      }
      <button onClick={handleNext}>Next</button>
    </ContPag>
  );
};

export default Pagination;

const ContPag = styled.div`
  width: 100%;
  height: 50px;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const ButtonPag = styled.button`
width: 20px;
height: 20px;
box-shadow: 0px 3px 5px #00000029;
`;