import Taro from '@tarojs/taro'
export function reqSuc(data, header, statusCode, errMsg) {}

// 网络异常处理
export function reqFail() {
	Taro.hideLoading()
	Taro.showToast({
		title: '网络错误',
		icon: 'none',
		duration: 3000,
	})
}
