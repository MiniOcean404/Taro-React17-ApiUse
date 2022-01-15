import { reqFail, reqSuc, reqComplete } from './reqStatus'
import { getEnv, ENV_TYPE, addInterceptor, request, interceptors, showLoading } from '@tarojs/taro'
import TaroType from '@tarojs/taro/types'
import { interceptor } from './Interceptor'
import whitelist from './whitelist'

let token

export default async function req(params) {
	const { url, method = 'GET', data = {}, header = { 'content-type': 'application/json' } } = params

	await showLoading({
		title: '加载中',
	})

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

	const mergeParams: TaroType.request.Option = {
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

	return request(mergeParams)
}

if (getEnv() !== ENV_TYPE.RN) {
	// 拦截器
	addInterceptor(interceptor)
	// Taro.addInterceptor(Taro.interceptors.logInterceptor)
	addInterceptor(interceptors.timeoutInterceptor)
}
