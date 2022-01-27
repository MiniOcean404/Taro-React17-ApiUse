import { FC, Fragment, ReactNode, useEffect, useMemo, useState } from 'react'
import { View } from '@tarojs/components'

type AppProps = {
	children?: ReactNode
}

// React没有计算属性，但是我们可以通过useMemo这个hook来实现，和Vue computed不太一样的地方在于，我们必须手动维护依赖
export const Watch: FC<AppProps> = () => {
	const [fetching, setFetching] = useState(false)
	const [selects] = useState(['boy', 'girl'])
	const [selectValue, setSelectValue] = useState('')

	const result = useMemo(() => {
		return fetching ? '请求中' : `请求结果： 选中${selectValue || '~'}`
	}, [fetching])

	const onSelect = (value) => {
		setSelectValue(value)
	}

	const fetch = () => {
		if (!fetching) {
			setFetching(true)

			setTimeout(() => {
				setFetching(false)
			}, 1000)
		}
	}

	useEffect(() => {
		fetch()
	}, [selectValue])

	return (
		<Fragment>
			<View className='watch'>
				<View className='selects'>
					{selects.map((item, i) => {
						return (
							<button key={i} onClick={() => onSelect(item)}>
								{item}
							</button>
						)
					})}
				</View>
				<View className='result'>{result}</View>
			</View>

			<br />
		</Fragment>
	)
}
