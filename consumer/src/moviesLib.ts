import axios from "axios";
import config from "./config";

const getMovies = async () => {
    const moviesRes = await axios.get(`http://localhost:${config.providerPort}/movies`);
    return moviesRes.data;
};

export default getMovies;
