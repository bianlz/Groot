/**
 * apiutils
 */

import axios from 'axios';

const host_addr = 'http://123.56.14.172:8082/api'
 //const host_addr = 'http://localhost:8081/api'
//const host_addr = 'http://10.235.134.61:8081/api'

export let login = params => { return axios.post(host_addr + `/login`, params).then(res => res.data).catch(function(thrown){alert('服务繁忙!')});};
