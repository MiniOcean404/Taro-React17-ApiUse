import { FC, Fragment, ReactNode, useMemo, useState } from 'react'
import { View } from '@tarojs/components'

type AppProps = {
	children?: ReactNode
}

export const StyleClass: FC<AppProps> = () => {
	const style = {
		width: '100%',
		height: '100px',
	}
	const style2 = {
		backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
		borderRadius: '10px',
	}

	const [isActive, setIsActive] = useState(false)
	const buttonText = useMemo(() => {
		return isActive ? '已选中' : '未选中'
	}, [isActive])
	const buttonClass = useMemo(() => {
		// 和Vue中不太一样的是我们需要手动join一下，变成'button active'形式
		// join(' ') 以' '将数组中的东西拼凑成字符串
		return ['button', isActive ? 'active' : ''].join(' ')
	}, [isActive])

	const onClickActive = () => {
		setIsActive(!isActive)
	}

	return (
		<Fragment>
			{/*style*/}
			<View className='style' style={{ ...style, ...style2 }}>
				{' '}
			</View>

			{/*class*/}
			<View className={buttonClass} onClick={onClickActive}>
				{buttonText}
			</View>

			<br />
		</Fragment>
	)
}
