import './index.scss'
import React from 'react'
import { View } from '@tarojs/components'

// 1. 使用 PropsWithChildren，这种方式可以为你省去频繁定义 children 的类型，自动设置 children 类型为 ReactNode:
// type AppProps = React.PropsWithChildren<{ message: string }>
// 2. 直接声明:
type AppProps = {
	message: string
	children?: React.ReactNode
}

export const FCPropChild = ({ message, children }: AppProps) => (
	<View>
		{message}

		{children}
	</View>
)
