// 后端消息提示
import Taro from '@tarojs/taro'

export function errorTip({ msg }) {
	Taro.showToast({
		title: msg,
		icon: 'none',
		duration: 3000,
	}).then()

	console.error('后端提示：' + msg)
}

// 后端没有任何数据返回的数据处理
export function noData(url) {
	const reg = /(?:\/[a-zA-Z]+)+/gims
	const path = reg.exec(url)?.[0]
	throw new Error(`\r\n后端数据没有任何返回\r\n接口地址:${path}`)
}
