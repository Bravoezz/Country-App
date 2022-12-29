import { useRouter } from "next/router";
import React,{useEffect} from "react";
import { useGetCountriesByIdQuery } from "../../RTK";
import toast, { Toaster } from "react-hot-toast";


const DetailCountry = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useGetCountriesByIdQuery(id);
  function ts() {
    toast.success(`Welcome to ${data[0].name}`, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        boxShadow: "none",
      },
    });

  }
  function by(){
    toast.success(`God Bye`, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        boxShadow: "none",
      },
    });
  }
  useEffect(() => {
    setTimeout(() => {
      if(data)ts();
    }, 3000);
  }, [data])
  

  return (
    <div>
      <Toaster />
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
          <hr />
          {data[0].activities?.map((e ,i ) => (
            <div key={i}>
              <h2>Activities</h2>
              <ul>
                <li>Nombre: {e.name}</li>
                <li>Dificultad: {e.dificultad}</li>
                <li>Duracion: {e.duracion}</li>
                <li>Temporada: {e.temporada}</li>
              </ul>
              
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default DetailCountry;
