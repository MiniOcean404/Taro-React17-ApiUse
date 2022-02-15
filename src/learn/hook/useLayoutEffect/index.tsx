import { FC, useLayoutEffect, useRef } from 'react'
import { Text, View } from '@tarojs/components'

type AppProps = {}

// useEffect执行顺序: 组件更新挂载完成 -> 浏览器 dom 绘制完成 -> 执行 useEffect 回调。
// useLayoutEffect 执行顺序: 组件更新挂载完成 ->  执行 useLayoutEffect 回调-> 浏览器dom绘制完成。
// 所以说 useLayoutEffect 代码可能会阻塞浏览器的绘制 。
// 我们写的 effect和 useLayoutEffect，react在底层会被分别打上PassiveEffect，HookLayout，在commit阶段区分出，在什么时机执行。

export const UseLayoutEffectHook: FC<AppProps> = () => {
	const target = useRef()
	useLayoutEffect(() => {
		/*我们需要在dom绘制之前，移动dom到制定位置*/
	}, [])
	return (
		<View>
			<Text ref={target} className='animate'>
				{' '}
			</Text>
		</View>
	)
}
