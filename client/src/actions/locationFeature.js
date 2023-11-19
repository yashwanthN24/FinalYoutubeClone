// LocationFeature.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const LocationFeature = () => {
//   const [userLocation, setUserLocation] = useState('');
//   const [showLocation, setShowLocation] = useState(false);

//   const handleClick = () => {
//     axios.get('https://ipapi.co/json/')
//       .then(response => {
//         setUserLocation(response.data.city + ', ' + response.data.country_name);
//         setShowLocation(true);
//       })
//       .catch(error => {
//         console.error('Error fetching location:', error);
//       });
//   };

//   return (
//     <div>
//       <button className="comment_show_location_btn" onClick={handleClick}>Show User's Location</button>
//       {showLocation && <p>User's Location: {userLocation}</p>}
//     </div>
//   );
// };

// export default LocationFeature;


// Display the location without the button. Gives the location in terms of latitude and longitude

// import React, { useEffect, useState } from 'react';

// const LocationFeature = () => {
//   const [userLocation, setUserLocation] = useState(null);

//   useEffect(() => {
//     // Get user's location using the Google Maps Geolocation API
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       (error) => {
//         console.error('Error fetching location:', error);
//       }
//     );
//   }, []);

//   return (
//     <div>
//       {userLocation ? (
//         <p>
//           Your Location: {userLocation.latitude}, {userLocation.longitude}
//         </p>
//       ) : (
//         <p>Loading location...</p>
//       )}
//     </div>
//   );
// };

// export default LocationFeature;

// This will decode the location into words format
// OpenCage API key 5e57c623fcf4430cbcd1982bdca391d9
// import React, { useEffect, useState } from 'react';

// const LocationFeature = () => {
//   const [userLocation, setUserLocation] = useState(null);

//   useEffect(() => {
//     // Get user's location using the Google Maps Geolocation API
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       (error) => {
//         console.error('Error fetching location:', error);
//       }
//     );
//   }, []);

//   const getCityName = async (latitude, longitude) => {
//     try {
//       const response = await fetch(
//         `https://api.opencagedata.com/geocode/v1/json?key=5e57c623fcf4430cbcd1982bdca391d9&q=${latitude}+${longitude}&pretty=1`
//       );
//       const data = await response.json();
//       const cityName = data.results[0].components.city;
//       return cityName;
//     } catch (error) {
//       console.error('Error fetching city name:', error);
//       return 'Unknown Location';
//     }
//   };

//   return (
//     <div>
//       {userLocation ? (
//         <p>
//           User's Location: {userLocation.latitude}, {userLocation.longitude}
//           <br />
//           City: {getCityName(userLocation.latitude, userLocation.longitude)}
//         </p>
//       ) : (
//         <p>Loading location...</p>
//       )}
//     </div>
//   );
// };

// export default LocationFeature;


// Due to the very slow response of that api we are changing to an lightweight API
// LocationFeature.js
// import React, { useEffect, useState } from 'react';

// const LocationFeature = () => {
//   const [userLocation, setUserLocation] = useState(null);

//   useEffect(() => {
//     // Get user's location using the Google Maps Geolocation API
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       (error) => {
//         console.error('Error fetching location:', error);
//       }
//     );
//   }, []);

//   const getCityName = async (latitude, longitude) => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
//       );
//       const data = await response.json();
//       const cityName = data.address.city || data.address.town || data.address.village || 'Unknown Location';
//       return cityName;
//     } catch (error) {
//       console.error('Error fetching city name:', error);
//       return 'Unknown Location';
//     }
//   };

//   return (
//     <div>
//       {userLocation ? (
//         <p>
//           Your Location: {userLocation.latitude}, {userLocation.longitude}
//           <br />
//           City: {getCityName(userLocation.latitude, userLocation.longitude)}
//         </p>
//       ) : (
//         <p>Loading location...</p>
//       )}
//     </div>
//   );
// };

// export default LocationFeature;








// Display the location without the button
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const LocationFeature = () => {
  const [userLocation, setUserLocation] = useState('');

  useEffect(() => {
    // Fetch user's location when the component mounts
    axios.get('https://ipapi.co/json/')
      .then(response => {
        setUserLocation(response.data.city + ', ' + response.data.country_name);
      })
      .catch(error => {
        console.error('Error fetching location:', error);
      });
  }, []);

  return (
    <div>
      <p>Your Location: {userLocation}</p>
    </div>
  );
};

export default LocationFeature;