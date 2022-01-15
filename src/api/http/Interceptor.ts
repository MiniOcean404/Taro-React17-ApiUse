// import { currentConfig } from 'api/http/config'

// console.log(`方法： ${method || 'GET'} --> 地址：${url} 请求数据：: `, data)
// console.log(`地址 <-- ${url} 响应结果:`, res)
export async function interceptor(chain) {
	const req = chain.requestParams

	return chain.proceed(req).then((res) => {
		return res
	})
}
