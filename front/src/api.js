import axios from 'axios';

export default axios.create({
    baseURL: server(),
    headers: {
         'Content-Type': 'application/json'
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: false
});

function server() {
   return process.env.VUE_APP_BACKEND_SERVER;
}


