import axios from 'axios';

const API_URL = 'https://www.omdbapi.com/';
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const getMovies = async (searchTerm: string) => {
  if (!API_KEY) {
    throw new Error(
      'Falta REACT_APP_OMDB_API_KEY. Copia .env.example a .env y define tu clave de OMDb.'
    );
  }

  try {
    const response = await axios.get(`${API_URL}?s=${searchTerm}&apikey=${API_KEY}`);
    if (response.data.Error) {
      throw new Error(response.data.Error);
    }
    return response.data.Search;
  } catch (error: any) {
    if (error && error.response && error.response.data && error.response.data.Error) {
        throw new Error(error.response.data.Error);
    } else {
        throw new Error("Error al obtener listado. Intente nuevamente");
    }
  }
};
