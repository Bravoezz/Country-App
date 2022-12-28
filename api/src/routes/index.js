const { Router } = require("express");
const { Activities, Country } = require("../db.js");
const { where } = require("sequelize");
const {Op} = require("sequelize")
const {
  getAllCountries,
  getCountriesByName,
  createActivities,
} = require("../Controllers/index.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers

router.get("/countries", async (req, res) => {
  const { name } = req.query;
  if (!name) await getAllCountries(res);
  if (name) await getCountriesByName(res, name);
});

router.get("/countries/:id", async (req,res)=>{
  const {id} = req.params;
  let country = await Country.findAll({
    where: {id,},
    include: {
      model: Activities,
      attributes: ["nombre","dificultad","duracion","temporada"],
      through: {
        attributes:[],
      },
    },
  })
  return res.status(200).send(country)
}) 

router.post("/activities", async (req, res) => {
  const { country,nombre, dificultad, duracion, temporada } = req.body;
  try {
    if (nombre && dificultad && duracion && temporada) {
      const newActivity = await createActivities(nombre, dificultad, duracion, temporada);
      const countries = await Country.findAll({
        where: {name:{ [Op.iLike]: `${country}%` },},});
      countries.map((e) => {
        e.addActivities(newActivity);
      });
      return res.status(200).send(newActivity);
    } else {
      throw Error("No se  pudo crear la actividad");
    }
  } catch (error) {
    res.status(401).send(error.message);
  }
});

module.exports = router;
