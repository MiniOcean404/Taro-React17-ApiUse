import { FC, useDebugValue, useState } from 'react'
import { tuple } from '../../../tool/type'
import { View } from '@tarojs/components'

type AppProps = {}

// 自定义HOOK
export const useDebugHook = (num) => {
	const [count, setCount] = useState(0)

	// useDebugValue 可用于在 React 开发者工具中显示自定义 hook 的标签。这个hooks目的就是检查自定义hooks
	// 我们不推荐你向每个自定义 Hook 添加 debug 值。当它作为共享库的一部分时才最有价值。在某些情况下，格式化值的显示可能是一项开销很大的操作。
	// 除非需要检查 Hook，否则没有必要这么做。因此，useDebugValue 接受一个格式化函数作为可选的第二个参数。该函数只有在 Hook 被检查时才会被调用。
	// 它接受 debug 值作为参数，并且会返回一个格式化的显示值。
	// 如何查看：开发者工具找到使用hook的组件 -> 点击 ->右侧有hooks
	useDebugValue(count > num ? '溢出' : '不足', (status) => {
		return status === '溢出' ? '我溢出了' : '我没有溢出'
	})

	const myCount = () => {
		setCount(count + 2)
	}

	// 实际需要: [boolean, typeof load] 类型
	// 而不是自动推导的：(boolean | typeof load)[]
	// 自定义 Hook 的返回值如果是数组类型，TS 会自动推导为 Union 类型，
	// 而我们实际需要的是数组里里每一项的具体类型，需要手动添加 const 断言 进行处理：
	// return [count, myCount] as const
	// return [count, myCount] as any[]
	// 或者
	return tuple(count, myCount)
}

export const UseDebugValueHook: FC<AppProps> = () => {
	const [v, seV] = useDebugHook(10)

	return (
		<View>
			{v}
			<button onClick={() => seV()}>setCount</button>
		</View>
	)
}
