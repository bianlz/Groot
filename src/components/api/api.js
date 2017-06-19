/**
 * apiutils
 */

import axios from 'axios';

const host_addr = 'http://localhost:8082/api'
 //const host_addr = 'http://localhost:8081/api'
//const host_addr = 'http://10.235.134.61:8081/api'

export let login = params => { return axios.post(host_addr + `/login`, params).then(res => res.data); };

// export let login = function(name,password){
//   let response = export let getGoodsList = axios.post(host_addr + '/login', {
//     name: name,
//     password: password
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }




