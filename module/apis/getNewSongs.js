
const request = require('../../util/request')
module.exports = ({ method = 'get', params = {}, option = {} }) => {
	return request({
		method,
		params,
	})
		.then(res => {
			const response = res.data;
			return {
				status: 200,
				body: {
					response,
				},
			};
		})
		.catch(error => {
			console.log('error', error);
			return {
				body: {
					error,
				},
			};
		});
};
