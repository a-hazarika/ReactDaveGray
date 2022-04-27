import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3500'
})
// const baseURL = 'http://localhost:3500';

// export default getAPICall = (url) => {
//     return axios.get(`${url`);
// }