import axios from "axios";
const instance = axios.create({
    baseURL: 'myapp',
});


const healthCheckHandler = (req, res) => {
    axios.get('http://localhost:3000').then((response) => res.send('Upstream working!'));
};

export default healthCheckHandler;
