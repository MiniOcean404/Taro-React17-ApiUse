import { reqFail, reqSuc, reqComplete } from './reqStatus'
import Taro from '@tarojs/taro'
import { addInterceptor } from './Interceptor'

export default function request(params) {
	const { url, method = 'GET', data = {}, header = { 'content-type': 'application/json' } } = params

	return Taro.request({
		dataType: 'json',
		url: process.env.BASE_URL + url,
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
	})
}

// 拦截器
Taro.addInterceptor(addInterceptor)
// Taro.addInterceptor(Taro.interceptors.logInterceptor)
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor)
