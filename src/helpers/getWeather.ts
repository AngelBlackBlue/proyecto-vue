import axios from "axios";

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m&timezone=auto&forecast_days=1';

export const getTemperature = async () => {
    const response = await axios.get(API_URL);
    return response.data.current.temperature_2m;
}