import axios from 'axios';

export default axios.create({
    baseURL: server(),
    headers: {
         'Content-Type': 'application/json'
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true
});

function server() {
   switch (process.env.NODE_ENV) {
       case "development":
           return process.env.VUE_APP_BACKEND_SERVER;
       default:
           return null;
   }
}


