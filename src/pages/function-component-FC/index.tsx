import './index.scss'
import React, { Fragment } from 'react'
import { View } from '@tarojs/components'
// https://juejin.cn/post/6952696734078369828
// 函数式组件是无状态组件
// 使用用React.FC声明函数组件和普通声明以及 PropsWithChildren 的区别是：
// React.FC显式地定义了返回类型，其他方式是隐式推导的
// React.FC对静态属性：displayName、propTypes、defaultProps提供了类型检查和自动补全
// React.FC为children提供了隐式的类型（ReactElement | null），但是目前，提供的类型存在一些 issue（问题）

type AppProps = {
	message: string
}

// 在通常情况下，使用 React.FC 的方式声明最简单有效，推荐使用；
export const FC: React.FC<AppProps> = ({ message, children }) => (
	<Fragment>
		<View>
			{message}
			{children}
		</View>

		<br />
	</Fragment>
)

// export const FC: React.FC<{}> = () => [1, 2, 3] as any
