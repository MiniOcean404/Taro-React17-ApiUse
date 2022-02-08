import { addInterceptor, request, interceptors, showLoading } from '@tarojs/taro'
import TaroType from '@tarojs/taro/types'
import { interceptor } from './Interceptor'
import { paramsDeploy } from './config'
import { isRN } from '../../tool/runtimeEnv'

export default async function req(params) {
	await showLoading({
		title: '加载中',
	})

	const mergeParams: TaroType.request.Option = paramsDeploy(params)

	return request(mergeParams)
}

if (!isRN) {
	// 拦截器
	addInterceptor(interceptor)
	// Taro.addInterceptor(Taro.interceptors.logInterceptor)
	addInterceptor(interceptors.timeoutInterceptor)
}
