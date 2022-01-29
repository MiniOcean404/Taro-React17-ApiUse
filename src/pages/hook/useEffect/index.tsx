import './index.scss'
import { FC, ReactNode, useEffect } from 'react'
import { View, Text } from '@tarojs/components'

// 1. 使用 PropsWithChildren，这种方式可以为你省去频繁定义 children 的类型，自动设置 children 类型为 ReactNode:
// type AppProps = React.PropsWithChildren<{ message: string }>
// 2. 直接声明:
type AppProps = {
	children?: ReactNode
}

// 1.（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作
// 2. 赋值给 useEffect 的函数会在组件渲染到屏幕之后执行。
// 3. 默认情况下，effect 将在每轮渲染结束后执行,但你可以选择让它 在只有某些值改变的时候 才执行。
// 4. 通常，组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源。要实现这一点，useEffect 函数需返回一个清除函数(回调函数里是个闭包)。

// effect 的执行时机
// 1. 默认情况下，effect 会在每轮组件渲染完成后执行。这样的话，一旦 effect 的依赖发生变化，它就会被重新创建。

// 注意
// 如果你要使用此优化方式，请确保数组中包含了所有外部作用域中会发生变化且在 effect 中使用的变量，否则你的代码会引用到先前渲染中的旧变量。
export const UseEffectHook: FC<AppProps> = () => {
	/* 模拟事件监听处理函数 */
	const handleResize = () => {}

	useEffect(() => {
		const timer = setInterval(() => console.log(666), 100000)
		window.addEventListener('resize', handleResize)

		// 此函数用于清除副作用
		return function () {
			clearInterval(timer)
			window.removeEventListener('resize', handleResize)
		}
	}, [1])

	return (
		<View>
			<Text>1</Text>
		</View>
	)
}
