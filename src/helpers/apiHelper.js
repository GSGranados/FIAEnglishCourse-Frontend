import axios from "axios";

const fiaECAPI = axios.create({
    baseURL: 'http://localhost:3001'});

  export default fiaECAPI

