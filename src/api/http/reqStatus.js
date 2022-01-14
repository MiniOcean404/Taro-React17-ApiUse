import Taro from '@tarojs/taro'

// 请求成功
export function reqSuc(data, header, statusCode, errMsg) {
	return data
}

// 请求失败-网络异常处理
export async function reqFail() {
	await Taro.showToast({
		title: '网络错误',
		icon: 'none',
		duration: 2000,
	})
}

// 无论何时都会执行
export async function reqComplete() {}
