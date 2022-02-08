import './index.scss'
import { FC, Fragment, ReactNode, useState } from 'react'
import { View } from '@tarojs/components'

type AppProps = {
	children?: ReactNode
}

export const VIfVShow: FC<AppProps> = () => {
	const [isShow, setIsShow] = useState(true)
	const onToggleShow = () => {
		setIsShow(!isShow)
	}

	return (
		<Fragment>
			<View className='v-if'>
				<button onClick={onToggleShow}>切换</button>
				{/* 也可以用三目运算符 */}
				{/* { isShow ? <View>前端胖头鱼 显示出来啦</View> : null } */}
				{isShow && <View>v-if</View>}

				{<View style={{ display: isShow ? '' : 'none' }}>v-show</View>}
			</View>
			<br />
		</Fragment>
	)
}
