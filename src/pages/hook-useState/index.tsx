import './index.scss'
import React from 'react'

// 1. 使用 PropsWithChildren，这种方式可以为你省去频繁定义 children 的类型，自动设置 children 类型为 ReactNode:
// type AppProps = React.PropsWithChildren<{ message: string }>
// 2. 直接声明:

type AppProps = {
	children?: React.ReactNode
}

export const FCUseState: React.FC<AppProps> = () => {
	// `val`会推导为boolean类型， toggle接收boolean类型参数
	const [val, toggle] = React.useState(false)

	// obj会自动推导为类型: {name: string}
	const [obj] = React.useState({ name: 'sj' })

	// arr会自动推导为类型: string[]
	const [arr] = React.useState(['1', '2'])

	return (
		<div>
			<span onClick={() => toggle(!val)}>{val.toString()}</span>
			<br />
			<span>obj{obj.name}</span>
			<br />
			<span>{arr}</span>
			<br />
		</div>
	)
}
