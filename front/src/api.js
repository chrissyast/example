import axios from 'axios';

export default axios.create({
    baseURL: `http://192.168.1.207:3000/`,
    headers: {
         'Content-Type': 'application/json'
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true
});


