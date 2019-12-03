import getMovies from "../moviesLib";

const moviesSortHandler = (req, res) => {
    getMovies().then((movies) => res.send(movies));
};

export default moviesSortHandler;
