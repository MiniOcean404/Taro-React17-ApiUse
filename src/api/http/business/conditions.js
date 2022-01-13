// eslint-disable-next-line import/no-cycle
import { tokenIsNull, tokenInvalid, errorTip, noData, hbData } from './handle'

const codeHandle = new Map([
	[30001, tokenIsNull],
	[30002, tokenInvalid],
	[404, errorTip],
	[99999, noData],
])

//  网络状态码是200处理业务状态码
export function netSuccess(res, url) {
	let realData = res.data
	if (typeof realData === 'string') {
		realData = JSON.parse(realData)
	}
	const { code } = realData
	const { msg } = realData

	if (codeHandle.get(code)) {
		return codeHandle.get(code)(realData)
	} else if (res && code !== 200 && msg !== '') {
		// 弹出后端消息
		codeHandle.get(404)(realData)
	} else if (res && !code && !msg) {
		// 后端没有任何数据返回时候
		codeHandle.get(99999)(url)
	}
}

// 网络状态码不是200处理
export function netFail(res) {
	uni.showToast({
		title: `错误信息：${res.errMsg} 状态码：${res.statusCode}`,
		icon: 'none',
		duration: 3000,
	})
}
