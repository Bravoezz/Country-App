import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Pagination = ({ pag, setPag }) => {
  const { allCount } = useSelector((state) => state.countries);
  let array = [];

  for (let i = 0; i < allCount.length; i += 15) {
    array.push(i / 15);
  }

  const handleClick = (e) => {
    setPag(e * 15);
  };
  const handlePrev = () => {
    if (!(pag <= 0)) setPag(pag - 15);
  };
  const handleNext = () => {
    if (pag >= 240) setPag(0);
    else setPag(pag + 15);
  };
  return (
    <ContPag>
      <FaChevronLeft id="left" onClick={handlePrev}></FaChevronLeft>
      {allCount.length
        ? array.map((e) => (
            <ButtonPag
              current={e}
              pag={pag}
              key={e}
              onClick={() => handleClick(e)}
            >
              {e + 1}
            </ButtonPag>
          ))
        : null}
      <FaChevronRight id="right" onClick={handleNext}></FaChevronRight>
    </ContPag>
  );
};

export default Pagination;

const ContPag = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  #left,
  #right {
    transform: scale(1.3);
    transition: 1s ease all;
    &:hover {
      transform: scale(1.5);
      transition: 0.5s ease all;
      color: orange;
    }
    &:active {
      transform: scale(1);
      transition: 0.5s ease all;
    }
  }
`;
const ButtonPag = styled.span`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  box-shadow: ${(props) =>
    `${props.current === props.pag / 15 ? "none" : "0px 3px 5px #00000029"}`};
  border-radius: 5px;
  background-color: #fff;
  margin-right: 7px;
  margin-left: 7px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    `${props.current === props.pag / 15 ? "orange" : "black"}`};
  &:hover {
    color: orange;
  }
`;
