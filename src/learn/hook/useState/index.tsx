import './index.scss'
import { FC, Fragment, ReactNode, useCallback, useState } from 'react'
import { View, Text } from '@tarojs/components'
// 1. 使用 PropsWithChildren，这种方式可以为你省去频繁定义 children 的类型，自动设置 children 类型为 ReactNode:
// type AppProps = React.PropsWithChildren<{ message: string }>
// 2. 直接声明:
type AppProps = {
	children?: ReactNode
}

export const UseStateHook: FC<AppProps> = () => {
	// `val`会推导为boolean类型， toggle接收boolean类型参数
	const [val, toggle] = useState(false)

	// obj会自动推导为类型: {name: string}
	const [user] = useState({ name: '用户名', age: 18 })

	// arr会自动推导为类型: string[]
	const [arr] = useState(['1', '2'])

	const showUser = useCallback((obj: typeof user) => {
		return `我的名字是${obj.name},我的年龄是 ${obj.age}`
	}, [])

	return (
		<Fragment>
			<View>
				<Text onClick={() => toggle(!val)}>{val.toString()}</Text>
				<br />
				<Text>obj:{user.name}</Text>
				<br />
				<Text>{arr}</Text>
				<br />

				<Text>{showUser(user)}</Text>
			</View>

			<br />
		</Fragment>
	)
}
