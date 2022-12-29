import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useGetAllCountriesQuery } from "../RTK";
import { getAllCountriesApi } from "../redux/countrySlice";
import Card from "./Card";
import {ImSad} from "react-icons/im"

const Cards = ({pag, setPag}) => {
  const { data, isLoading } = useGetAllCountriesQuery();
  const dispatch = useDispatch();
  const { allCount, countryQuery,temp } = useSelector((state) => state.countries);

  useEffect(() => {
    if (data) dispatch(getAllCountriesApi(data));
  }, [data]);

const counrtyPag = () => {

 if(!countryQuery) return allCount.slice(pag, pag+15);
 return temp
}

  return (
    <ContainCards>
      {isLoading ? (
        <h1>Paises loading... </h1>
      ) : (
        <>
          {counrtyPag().length?counrtyPag().map((e) => (
            <Card key={e.id} id={e.id} capital={e.capital} name={e.name} flag={e.flag} />
          ))
        : <h2>The country does not exist <ImSad></ImSad></h2>
        }
        </>
      )}
    </ContainCards>
  );
};

export default Cards;

const ContainCards = styled.div`
  width: 90%;
  margin: 10px auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  padding: 20px 30px;
  margin: 0 auto;
  justify-content: center;
`;
