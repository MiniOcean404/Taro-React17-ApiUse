import { showToast } from '@tarojs/taro'

// 请求成功
// @ts-ignore
export function reqSuc(result) {
	// @ts-ignore
	const { data, header, statusCode, errMsg } = result
}

// 请求失败-网络异常处理
export async function reqFail() {
	await showToast({
		title: '网络错误',
		icon: 'none',
		duration: 2000,
	})
}

// 无论何时都会执行
export async function reqComplete() {}
