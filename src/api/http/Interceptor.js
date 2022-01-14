// import { currentConfig } from 'api/http/config'
import { netFail, netSuccess } from './conditions'
import whitelist from './whitelist'
import Taro from '@tarojs/taro'

let token
// console.log(`方法： ${method || 'GET'} --> 地址：${url} 请求数据：: `, data)
// console.log(`地址 <-- ${url} 响应结果:`, res)
export async function addInterceptor(chain) {
	await Taro.showLoading({
		title: '加载中',
	})

	const req = chain.requestParams
	const { method, data, url } = req

	// token信息
	const isAddToken = whitelist.some((i) => {
		return i.exec(url)
	})

	if (isAddToken && token) {
		req.header.token = token
	} else if (isAddToken) {
		const vuex = localStorage.getItem('vuex') ? JSON.parse(localStorage.getItem('vuex')) : null
		req.header.token = token = vuex ? vuex.user.token : ''
	}

	return chain.proceed(req).then((res) => {
		const { statusCode } = res

		if (statusCode === 200) {
			netSuccess(res, url)
		} else {
			netFail(res)
		}

		Taro.hideLoading()
		return res
	})
}
