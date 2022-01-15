import { getEnv, ENV_TYPE, addInterceptor, request, interceptors, showLoading } from '@tarojs/taro'
import TaroType from '@tarojs/taro/types'
import { interceptor } from './Interceptor'
import { paramsDeploy } from './config'

export default async function req(params) {
	await showLoading({
		title: '加载中',
	})

	const mergeParams: TaroType.request.Option = paramsDeploy(params)

	return request(mergeParams)
}

if (getEnv() !== ENV_TYPE.RN) {
	// 拦截器
	addInterceptor(interceptor)
	// Taro.addInterceptor(Taro.interceptors.logInterceptor)
	addInterceptor(interceptors.timeoutInterceptor)
}
