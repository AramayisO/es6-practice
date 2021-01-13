import { getCoordinates } from './geolocations.js';
import { getWeatherData } from './weather.js';

// --------------------------------------------------------
// With the older Promise syntax
// --------------------------------------------------------

// Getting just the coordinates.
getCoordinates('Fresno')
    .then((coords) => console.log(coords))

// Getting just the weather.
getWeatherData(36.731654, -119.785856)
    .then((weather) => console.log(weather));

// We can call the getWeatherData method inside then() to
// have access to the coordinates returned by getCoordinates.
// Note that the Promise returned by getWeatherData() is
// returned from the first then() since we are using arrow functions
// and we can call then() on that returned Promise again to access the
// weather data.
getCoordinates('Fresno')
    .then((coords) => getWeatherData(coords.lat, coords.lng))
    .then((weather) => console.log(weather));

// Here we do the same thing, but we use object destructuring to
// get the latitude and longitude in separate varaibles. Note that
// since the stuff right after the arrow isn't being returned anymore,
// we have to explicitly return the Promise returned by getWeatherData().
getCoordinates('Fresno')
    .then((coords) => {
        const {lat, lng} = coords;
        return getWeatherData(lat, lng)
    })
    .then((weather) => console.log(weather));

// We can actually use object destructuring directly in the parameter
// of the function passed to the first then().
getCoordinates('Fresno')
    .then(({lat, lng}) => getWeatherData(lat, lng))
    .then((weather) => console.log(weather));


// --------------------------------------------------------
// With ES6 Async/Await syntax
// --------------------------------------------------------

// We can only use 'await' inside of an 'async' function. That's why
// we are wrapping our code in an async function. We are using an anonymous
// function that is immediately executed after being defined (called an 'IIFE').
(async function() {
    const coords = await getCoordinates('Fresno');
    const weather = await getWeatherData(coords.lat, coords.lng);
    console.log(weather);
}());

// We can create an 'IIFE' with arrow functions as well.
(async () => {
    const coords = await getCoordinates('Fresno');
    const weather = await getWeatherData(coords.lat, coords.lng);
    console.log(weather);
})();

// And we can use object destructuring
(async () => {
    const coords = await getCoordinates('Fresno');
    const {lat, lng} = coords;
    const weather = await getWeatherData(lat, lng);
    console.log(weather);
})();

// And we can use object destructuing right on the return from
// await getCoordinates().
(async () => {
    const {lat, lng} = await getCoordinates('Fresno');
    const weather = await getWeatherData(lat, lng);
    console.log(weather);
})();