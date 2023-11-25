import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LocationFeature = () => {
  const [userLocation, setUserLocation] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            try {
              const response = await axios.get(
                `https://api.opencagedata.com/geocode/v1/json?key=a9bc3b38a77e4ed8964729eb73743e93&language=en&pretty=1&q=${latitude}+${longitude}`
              );

              const { city, state, country } = response.data.results[0].components;
              setUserLocation(`${city}, ${state}, ${country}`);
            } catch (error) {
              console.error('Error fetching location details:', error);
            }
          },
          (error) => {
            console.error('Error fetching location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser.');
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      <p>Your Location: {userLocation}</p>
    </div>
  );
};

export default LocationFeature;
