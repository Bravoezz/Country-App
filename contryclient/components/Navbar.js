import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { filterChange, res } from "../redux/countrySlice";
import { useRouter } from "next/router";
import { changeTheme } from "../redux/themeSlice";
import { useSelector } from "react-redux";
import Switch from "./Switch";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const Router = useRouter();
  const {themeIs}  = useSelector(state => state.theme)


  const handleChange = (e) => {
    let ss = e.target.value;
    if (!ss.length) dispatch(res());
    setSearch(ss);
    if (ss.length > 1) dispatch(filterChange(ss));
  };

  const handleClick = () => {
    dispatch(changeTheme());
  };

  return (
    <ContainNavbar themeIs={themeIs}>
      <div id="div">
        <img
          src={"https://www.ideasconsentido.cl/imagenes/google.svg"}
          alt="logo"
        />
        <h1 onClick={() => Router.push("/")}>Country App</h1>
      </div>
      <div id="idd">

      <Switch />
      <form onSubmit={(e) => e.preventDefault()}>
        <Label themeIs={themeIs}>
          <input type="text" onChange={handleChange} value={search} />
          <button>Buscar</button>
        </Label>
      </form>
      </div>
    </ContainNavbar>
  );
};

export default Navbar;

const Label = styled.label`
  box-shadow: ${props => `${props.themeIs? "none": "0px 3px 5px #00000029"}`};
  border-radius: 10px;
  padding: 3px 5px;
  color: ${props => `${props.themeIs? " orange": "gray"}`};;
  border:${props => `${props.themeIs? "1px solid orange": "none"}`};
  button {
    color: orange;
    all: unset;
    border-left:${props => `${props.themeIs? "1px solid orange": "1px solid rgba(0, 0, 0, 0.4)"}`};
    padding-left: 4px;
  }
  &:hover {
    box-shadow: none;
    border: 1px solid orange;
    button {
      color: orange;
      border-left: 1px solid orange;
    }
  }
  input {
    background-color: gray;
    all: unset;
    color: gray;
  }
`;

const ContainNavbar = styled.div`
  width: 100vw;
  height: 90px;
  position: fixed;
  z-index: 99;
  top: 0;
  background-color: ${(props) =>
    `${props.themeIs ? "rgb(39 39 42)" : "white"}`};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.5s;

  justify-content: space-around;
  #idd{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
  h1 {
    color: gray;
    cursor: pointer;
    color: ${(props) =>
    `${props.themeIs ? "orange" : "gray"}`};
    text-shadow: ${(props) =>
    `${props.themeIs ? "5px 3px 5px black" : "0px 3px 1px black"}`};
  }
  #div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  img {
    height: 80px;
    transition: 0.5s ease all;
    &:hover {
      transform: scale(1.2);
      transition: 0.5s ease all;
    }
  }
`;
