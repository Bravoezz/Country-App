import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useGetAllCountriesQuery } from "../RTK";
import { getAllCountriesApi } from "../redux/countrySlice";
import Card from "./Card";

const Cards = () => {
  const { data, isLoading } = useGetAllCountriesQuery();
  const dispatch = useDispatch();
  const { allCount, countryQuery,temp } = useSelector((state) => state.countries);

  useEffect(() => {
    if (data) dispatch(getAllCountriesApi(data));
  }, [data]);

const counrtyPag = () => {

 if(!countryQuery) return allCount;
 return temp
}

  return (
    <ContainCards>
      {isLoading ? (
        <h1>Paises loading... </h1>
      ) : (
        <>
          {counrtyPag()?.map((e) => (
            <Card key={e.id} id={e.id} capital={e.capital} name={e.name} flag={e.flag} />
          ))}
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
