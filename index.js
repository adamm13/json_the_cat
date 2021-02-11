const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2]; //taking int he second command line arg from user

fetchBreedDescription(breedName, (error, info) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(info);
  }
});