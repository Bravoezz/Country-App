import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { filterChange, res } from "../redux/countrySlice";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let ss = e.target.value;
    if (!ss.length) dispatch(res());
    setSearch(ss);
    dispatch(filterChange(ss));
  };

  return (
    <ContainNavbar>
      <div id="div">
      <img src={"https://www.ideasconsentido.cl/imagenes/google.svg"} alt="logo"  />
      <h1>Country App</h1>
      </div>
      <form>
        <Label>
          <input type="text" onChange={handleChange} value={search} />
          <button>Buscar</button>
        </Label>
      </form>
    </ContainNavbar>
  );
};

export default Navbar;

const Label = styled.label`
  box-shadow: 0px 3px 5px #00000029;
  border-radius: 10px;
  padding: 3px 5px;
  &:hover{
  box-shadow: none;
  border: 1px solid orange;
button{
  color : orange;
  border-left: 1px solid orange;
}
  }
  input {
    background-color: gray;
    all: unset;
  }
  button {
    color: #666666;
    all: unset;
    border-left: 1px solid rgba(0, 0, 0, 0.4);
    padding-left: 4px;
  }
`;

const ContainNavbar = styled.div`
  width: 100vw;
  height: 90px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  #div{
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  }
  img{
    height: 80px;
    transition: 0.5s ease all;
    &:hover{
    
      transform: scale(1.2);
      transition: 0.5s ease all;
    
  }

  }
  
`;
