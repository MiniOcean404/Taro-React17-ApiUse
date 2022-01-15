import whitelist from './whitelist'
import { reqComplete, reqFail, reqSuc } from './reqStatus'
import TaroType from '@tarojs/taro'

let token

export function paramsDeploy(params): TaroType.request.Option {
	const { url, method = 'GET', data = {}, header = { 'content-type': 'application/json' } } = params

	// token信息
	const isAddToken = whitelist.some((i) => {
		return i.exec(url)
	})

	if (isAddToken && token) {
		header!.token = token
	} else if (isAddToken) {
		const vuex = localStorage.getItem('vuex')
			? JSON.parse(localStorage.getItem('vuex') || '')
			: null
		header!.token = token = vuex ? vuex.user.token : ''
	}

	return {
		dataType: 'json',
		// @ts-ignore
		url: BASE_URL + url,
		data,
		method,
		header,
		mode: 'cors',
		credentials: 'include',
		timeout: 2000,
		retryTimes: 2, // 求重试次数
		// backup:'', // 设置 H5 端请求的兜底接口
		// dataCheck:'', // 设置 H5 端请求响应的数据校验函数，若返回 false，则请求兜底接口，若无兜底接口，则报请求失败
		useStore: true,
		// storeCheckKey:'',	// 设置 H5 端请求缓存校验的 key
		// storeSign:'',	// 设置 H5 端请求缓存签名
		// storeCheck:'',	// 设置 H5 端请求校验函数，一般不需要设置
		success: reqSuc,
		fail: reqFail,
		complete: reqComplete,
	}
}
