
const request = require('request'); //require to use request

const fetchBreedDescription = function(breedname, callback) {

  const website = `https://api.thecatapi.com/v1/breeds/search?q=${breedname}`; //website to be taken with process argv

  request(website, (error, response, body) => { //request is callback function
    const data = JSON.parse(body); //parsing the body of data
    if (data[0]) { //if the data is found in array return the description.
      return callback(error, data[0].description.trim());
    } else {  //if not data is found in the array return the callback.
      return callback('Cant find the breed name!');
    }
  });
  
};
module.exports = { fetchBreedDescription };
