const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")


router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/findByDistrict", CowinController.getCenters)
router.get("/temp/getWeatherInLondon", CowinController.getWeatherInLondon)
router.get("/temp/getTemperatureInLondon", CowinController.getTemperatureInLondon)
router.get("/temp/getTemperatureInCities", CowinController.getTemperatureInCities)
router.get("/memes/getMemes", CowinController.getMemes)
router.get("/memes/editMemes", CowinController.editMemes)


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date


module.exports = router;