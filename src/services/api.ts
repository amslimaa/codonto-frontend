import axios from  'axios';


const api = axios.create({
  baseURL: 'https://sheltered-beyond-27795.herokuapp.com',
  //baseURL: 'http://localhost:3333',
});


export default api;