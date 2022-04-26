let axios = require("axios")


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getCenters = async function (req, res) {

    try {
        let district_id = req.query.district_id
        let date = req.query.date
        let options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


const getWeatherInLondon = async function (req, res) {
    try 
    {
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=fee970de4efd04c133fc84695c62ad32`
        }
        let result = await axios(options)
        res.status(200).send({msg: result.data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

const getTemperatureInLondon = async function (req, res) {
    try 
    {
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=fee970de4efd04c133fc84695c62ad32`
        }
        let result = await axios(options)
        res.status(200).send({ msg: 'The current temperature in London is : '+result.data.main.temp+' K' })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};


const getTemperatureInCities = async function (req, res) {
    try 
    {
        let cities=["Bengaluru","London","Mumbai","Delhi","Chennai","Kolkata","Moscow"];
        let result=[];
        for(let i=0;i<cities.length;++i)
        {
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=fee970de4efd04c133fc84695c62ad32`
            };
            let tmp = await axios(options);
            let obj={city : tmp.data.name, temp : tmp.data.main.temp};
            result[i]=obj;
        }


        for(let i=0;i<result.length;++i)
        {
            for(let j=i;j<result.length;++j)
            {
                if(result[i].temp>result[j].temp)
                {
                    let tmp=result[i];
                    result[i]=result[j];
                    result[j]=tmp;
                }
            }
        }
        res.status(200).send({ data : result});
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error : err.message });
    }
};


const getMemes = async function (req, res) {
    try 
    {
        var options = {
            method: "get",
            url: `http://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        res.status(200).send({msg: result.data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};


const editMemes = async function (req, res) {
    try 
    {
        let options = {
            method: "get",
            url: `http://api.imgflip.com/caption_image?template_id=${req.query.template_id}&text0=${req.query.text0}&text1=${req.query.text1}&username=${req.query.username}&password=${req.query.password}`
        }
        let result = await axios(options) 
        res.status(200).send({msg: result.data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

getTemperatureInLondon

module.exports.getDistricts = getDistricts
module.exports.getCenters = getCenters
module.exports.getWeatherInLondon = getWeatherInLondon
module.exports.getTemperatureInLondon = getTemperatureInLondon
module.exports.getTemperatureInCities = getTemperatureInCities
module.exports.getMemes = getMemes
module.exports.editMemes = editMemes