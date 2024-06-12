import request from "superagent";
import { Weather } from "../../models/weather";
import { useQuery } from "@tanstack/react-query";

export default function useLocation() {

  function useGetCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
    
    function success(position: GeolocationPosition) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }
    
    function error() {
      console.log("Unable to retrieve your location");
    }
  }

  function useGetWeather(latitude: number, longitude: number) {
    return useQuery({
      queryKey: ['weather', latitude, longitude],
      queryFn: async () => {
        const res = await request.get('/api/v1/location/weather').query({latitude, longitude})
        return res.body as Weather
      }
    })
    
  }

  return {
    getCurrent: useGetCurrentLocation,
    weather: useGetWeather
  }
}