import { FC, Fragment, useCallback, useState } from 'react'
import { View } from '@tarojs/components'

type AppProps = {}

// useMemo 和 useCallback 接收的参数都是一样，都是在其依赖项发生变化后才执行，都是返回缓存的值，
// 区别在于 useMemo 返回的是函数运行的结果， useCallback 返回的是函数。
//    useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
// 返回的callback可以作为props回调函数传递给子组件。
const Text = ({ v }) => {
	return <View>{v()}</View>
}

export const UseCallBackHook: FC<AppProps> = () => {
	const [number, setNumber] = useState(1)

	const name = useCallback(() => {
		console.log('UseCallBackHook:执行')
		return <>{number}</>
	}, [number])

	return (
		<Fragment>
			<button onClick={() => setNumber(number + 1)}>增加</button>
			<Text v={name} />
			<br />
		</Fragment>
	)
}
