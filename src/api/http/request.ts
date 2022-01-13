// import { invoke, success, fail, complete } from './Interceptor'
import { reqFail, reqSuc } from './requestStatus'
import Taro from '@tarojs/taro'

export default function server(params) {
	const { url, method = 'GET', data = {}, header = { 'content-type': 'application/json' } } = params

	return Taro.request({
		dataType: 'json',
		url,
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
		complete() {},
	})
}

// 拦截器
Taro.addInterceptor((chain) => {
	const requestParams = chain.requestParams
	const { method, data, url } = requestParams

	console.log(`http ${method || 'GET'} --> ${url} data: `, data)

	return chain.proceed(requestParams).then((res) => {
		console.log(`http <-- ${url} result:`, res)
		return res
	})
})
