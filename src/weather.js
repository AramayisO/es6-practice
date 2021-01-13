export const getWeatherData = async (latitude, longitude, units='imperial') => {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/onecall';
    const apiKey = 'YOUR API KEY';
    const url = `${apiUrl}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    const response = await fetch(url);
    // There's a lot of data in the returned object, but we'll only need
    // the current weather and the daily 7 day forecast for the project.
    const { current, daily } = await response.json();
    return { current, daily };
};

// --------------------------------------------------------
// With the older Promise syntax
// --------------------------------------------------------

// export const getWeatherData = (latitude, longitude, units='imperial') => {
//     const apiUrl = 'https://api.openweathermap.org/data/2.5/onecall';
//     const apiKey = 'YOUR API KEY';
//     const url = `${apiUrl}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
//     return fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             // There's a lot of data in the returned object, but we'll only need
//             // the current weather and the daily 7 day forecast for the project.
//             const {current, daily} = data;
//             return {current, daily};
//         });
// }