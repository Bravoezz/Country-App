import { useRouter } from "next/router";
import React from "react";
import { useGetCountriesByIdQuery } from "../../RTK";

const DetailCountry = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useGetCountriesByIdQuery(id);
  return (
    <div>
      <h1>hola</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{data[0].name}</h1>
          <hr />
          <img src={data[0].flag} alt={data[0].name} />
          <h3>{data[0].continente}</h3>
          <h3>{data[0].area}</h3>
          <h3>{data[0].id}</h3>
          <h3>{data[0].subregion}</h3>
          <h3>{data[0].poblacion}</h3>
        </>
      )}
    </div>
  );
};

export default DetailCountry;
