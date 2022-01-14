import request from './http/request'

export function login(userName, password) {
	return request({
		url: '/customer/login/login',
		method: 'POST',
		data: { userName, password },
	})
}
