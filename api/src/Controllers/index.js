const axios = require("axios");
const { Op } = require("sequelize");
const { Activities, Country } = require("../db.js");

// crear la base de datos al momento de inicializar el servidor
async function createDB(Country) {
  const { data } = await axios.get("https://restcountries.com/v3/all");
  const apiCountries = data.map((cou) => {
    return {
      id: cou.cca3,
      name: cou.name.common,
      flag: cou.flags[1],
      continente: cou.region != null ? cou.continents[0] : "data null",
      capital: cou.capital != null ? cou.capital[0] : "data null",
      subregion: cou.subregion != null ? cou.subregion : "data null",
      area: cou.area,
      poblacion: cou.population,
    };
  });
  await Country.bulkCreate(apiCountries, {
    ignoreDuplicates: true,
  });
}

// mandar la base de datos de countrys completa
async function getAllCountries(res) {
  try {
    const db = await Country.findAll();
    res.status(201).json(db);
  } catch (error) {
    res.status(400).send("algo salio mal");
    console.log(error);
  }
}

//mandar el pais que coincida con el name que viene por query
async function getCountriesByName(res, name) {
  try {
    const names = await Country.findAll({
      where: { name: { [Op.iLike]: `${name}%` } },
    });
    if (names.length == 0)
      throw Error(`No existe nigun pais con nombre ${name}`);
    res.status(201).json(names);
  } catch (error) {
    res.status(401).send(error.message);
  }
}

async function createActivities(nombre, dificultad, duracion, temporada) {
  return await Activities.create({ nombre, dificultad, duracion, temporada });
}

module.exports = {
  createDB,
  getAllCountries,
  getCountriesByName,
  createActivities,
};
