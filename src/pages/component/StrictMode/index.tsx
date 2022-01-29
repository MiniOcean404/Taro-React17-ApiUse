// StrictMode目前有助于：
//
// ①识别不安全的生命周期。
// ②关于使用过时字符串 ref API 的警告
// ③关于使用废弃的 findDOMNode 方法的警告
// ④检测意外的副作用
// ⑤检测过时的 context API

// 对于不安全的生命周期，指的是UNSAFE_componentWillMount，UNSAFE_componentWillReceiveProps , UNSAFE_componentWillUpdate

import { StrictMode } from 'react'
import { View } from '@tarojs/components'

export const StrictModeUse = () => {
	return (
		<StrictMode>
			<View>严格模式</View>
		</StrictMode>
	)
}
