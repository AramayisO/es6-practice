/**
 * Returns a Promise with an object containing the latitude and longitude
 * coordinates of the specified location.
 * 
 * The returned object has the format { lat: number, lng: number }.
 * 
 * @param {string} location A city, point of interest, etc to get the geographic
 *                          coordinates of.
 */
export const getCoordinates = async (location) => {
    const apiKey = 'YOUR API KEY';
    const apiUrl = 'http://www.mapquestapi.com/geocoding/v1/address';
    const response = await fetch(`${apiUrl}?key=${apiKey}&location=${location}`)
    const data = await response.json();
    return data.results[0].locations[0].latLng;
};

// --------------------------------------------------------
// With the older Promise syntax
// --------------------------------------------------------

// export const getCoordinates = (location) => {
//     const apiKey = 'YOUR API KEY';
//     const apiUrl = 'http://www.mapquestapi.com/geocoding/v1/address';
//     return fetch(`${apiUrl}?key=${apiKey}&location=${location}`)
//         .then((response) => response.json())
//         .then((data) => {
//             return data.results[0].locations[0].latLng
//         });
// };