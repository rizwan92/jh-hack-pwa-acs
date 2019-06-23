import axios from 'axios';

const BaseUrl = 'http://localhost:3000/api';

class HttpService {
  static get(url, params, cb) {
    axios
      .get(BaseUrl + url, params)
      .then(response => {
        console.log(response);
        cb(null, response);
      })
      .catch(error => {
        console.log(error);
        cb(error, null);
      });
  }

  static post(url, params, callback) {
    var headers = {
      'Content-Type': 'application/json'
    };
    axios
      .post(BaseUrl + url, params, { headers: headers })
      .then(response => {
        console.log(response);
        callback(null, response);
      })
      .catch(err => {
        console.log(err);
        callback(err, null);
      });
  }

  static delete(url, params, callback) {
    var headers = {
      'Content-Type': 'application/json'
    };
    axios
      .delete(BaseUrl + url, params, { headers: headers })
      .then(response => {
        console.log(response);
        callback(null, response);
      })
      .catch(err => {
        console.log(err);
        callback(err, null);
      });
  }
}

export default HttpService;
