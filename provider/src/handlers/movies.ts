const moviesHandler = (req, res) => res.send({movies: [
        {title: 'Lord of the rings'},
        {title: 'Star Wars'},
        {title: 'Once upon a time'},
    ]});

export default moviesHandler;
