const axios = require('axios');
const qs = require('qs');
require('../util/colors');

// `withCredentials` 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.responseType = 'json;text/plain;charset=utf-8;';

function request({url, method, params}) {
	let baseURL = 'https://www.my903.com/903openbox/api/post';
	// let opts = {
	// 	host: '101.133.216.143',
	// 	port: 7890,
	// }
	return axios({
		method: method,
		data: qs.stringify(params),   // 用 qs 将js对象转换为字符串 'name=edward&age=25'
		url: baseURL,
		// proxy: opts,
	})
	.then(
		response => {
			if (!response) {
				throw Error('response is null');
			}
			console.log(`${url?url:baseURL} request success`.info);
			return response;
		},
		error => {
			console.log(`${url?url:baseURL} request error`.error);
			throw error;
		},
	);
}

module.exports = request;
