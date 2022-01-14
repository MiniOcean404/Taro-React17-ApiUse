import { errorTip, noData } from './handle'
import Taro from '@tarojs/taro'

const handleMap = new Map([
	['errorTip', errorTip],
	['noData', noData],
])

//  网络状态码是200处理业务状态码
export function netSuccess(res, url) {
	if (typeof res.data === 'string') res.data = JSON.parse(res.data)

	let data = res.data
	const { code } = data
	const { msg } = data

	if (handleMap.get(code)) {
		handleMap.get(code)!(data)
	} else if (res && msg && code !== 200) {
		handleMap.get('errorTip')!(data)
	} else if (res && !code && !msg) {
		handleMap.get('noData')!(url)
	}
}

// 网络状态码不是200处理
export function netFail(res) {
	Taro.showToast({
		title: `错误信息：${res.errMsg} 状态码：${res.statusCode}`,
		icon: 'none',
		duration: 3000,
	}).then()
}
