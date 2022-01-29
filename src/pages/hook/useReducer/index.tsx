import { FC, Fragment, useReducer } from 'react'
import { View } from '@tarojs/components'

type AppProps = {}

// 在react-hooks原理那篇文章中讲解到，useState底层就是一个简单版的useReducer
// useReducer 接受的第一个参数是一个函数，我们可以认为它就是一个 reducer ,
// reducer 的参数就是常规 reducer 里面的 state 和  action ,返回改变后的 state ,
// useReducer 第二个参数为 state 的初始值 返回一个数组，数组的第一项就是更新之后 state 的值 ，第二个参数是派发更新的 dispatch 函数。

export const UseReducerHook: FC<AppProps> = () => {
	/* number为更新后的state值,  dispatchNumber 为当前的派发函数 */
	const [number, dispatchNumber] = useReducer((state, action) => {
		const { resetValue, name } = action
		/* return的值为新的state */
		switch (name) {
			case 'add':
				return state + 1
			case 'sub':
				return state - 1
			case 'reset':
				return resetValue
		}
		return state
	}, 0)

	return (
		<Fragment>
			<View>
				当前值：{number}
				{/* 派发更新 */}
				<button onClick={() => dispatchNumber({ name: 'add' })}>增加</button>
				<button onClick={() => dispatchNumber({ name: 'sub' })}>减少</button>
				<button onClick={() => dispatchNumber({ name: 'reset', resetValue: 666 })}>赋值</button>
				{/* 把dispatch 和 state 传递给子组件  */}
				{/*<MyChildren dispatch={dispatchNumber} State={{ number }} />*/}
			</View>
		</Fragment>
	)
}
