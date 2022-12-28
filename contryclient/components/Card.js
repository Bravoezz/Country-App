import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Card = (props) => {
  const router = useRouter();
  const handleClick = (id) => {
    router.push("/details/[id]", `/details/${id}`);
  };
  return (
    <ContainCard className="card">
     
      <span
        style={{
          backgroundImage: `url(${props.flag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        id="img"
      ></span>
      <h2>{props.name}</h2>

      <p>Capital: {props.capital}</p>
      <button onClick={() => handleClick(props.id)}>{"Detalles"}</button>
    </ContainCard>
  );
};

export default Card;

const ContainCard = styled.div`
  width: 250px;
  height: 250px;
  background: white;
  border-radius: 10px;
  text-align: center;
  transition: all 0.5s;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 5px #00000029;  
  #img {
    display: flex;
    margin: 30px auto 25px auto;
    width: 100px;
    height: 100px;

    border-radius: 50%;
    font-size: 11px;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }
  h2 {
    padding: 15px 10px;
    font-size: 25px;
    transition: all 0.1s;
    z-index: -99;
    line-height: 17px;
  }
  p {
    display: none;
    opacity: 0;
    transition: all 0.75s;
    
  }
  button {
    all: unset;
    font: sans-serif;
    opacity: 0;
    padding: 4px 8px;
    background-color: #eb772a;
    border-radius: 5px;
    color: white;
    border: none;
  }
  &:hover {
    background-color:#efefef;
    border: 1px solid #eb772a;
    box-shadow: none;
    
    #img {
      width: 100%;
      height: 70%;
      border-radius: 10px 10px 0px 0;
      margin: 0 auto;
      background-color: #f0f0f0;
      z-index: 99999;
    }

    h2 {
      opacity: 0;

      position: absolute;
      transition: all 0.5s;
    }
    p {
      display: inherit;
      width: 100%;
      opacity: 1;
      margin-bottom: 7px;
      transition: all 0.1s;
    }
    button {
      text-decoration: none;
      opacity: 1;
    }
  }
`;
