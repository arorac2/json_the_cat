const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.error('Error fetching details:', error);
  } else {
    console.log(description);
  }
});