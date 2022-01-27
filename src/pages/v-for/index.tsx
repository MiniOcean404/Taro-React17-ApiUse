import './index.scss'
import { FC, ReactNode, useState } from 'react'
import { View } from '@tarojs/components'

type AppProps = {
	children?: ReactNode
}

export const VFor: FC<AppProps> = () => {
	const [list] = useState([
		{
			id: 1,
			name: '前端',
		},
		{
			id: 2,
			name: '后端',
		},
	])

	return (
		<View className='v-for'>
			{list.map((item) => {
				return (
					<View className='v-for-item' key={item.id}>
						{item.name}
					</View>
				)
			})}
		</View>
	)
}
