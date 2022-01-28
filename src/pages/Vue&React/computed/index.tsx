import { FC, Fragment, ReactNode, useMemo, useState } from 'react'
import { View } from '@tarojs/components'

type AppProps = {
	children?: ReactNode
}

// React没有计算属性，但是我们可以通过useMemo这个hook来实现，和Vue computed不太一样的地方在于，我们必须手动维护依赖
export const Computed: FC<AppProps> = () => {
	const [num1, setNum1] = useState(10)
	const [num2] = useState(10)

	// 把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。
	// 传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。
	// 如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。
	// 依赖项数组不会作为参数传给“创建”函数。
	const num3 = useMemo(() => {
		return num1 + num2
	}, [num1, num2])

	const onAdd = () => {
		setNum1(num1 + 10)
	}

	return (
		<Fragment>
			<View className='computed'>
				<button onClick={onAdd}>+10</button>
				<View>计算结果：{num3}</View>
			</View>
			<br />
		</Fragment>
	)
}
