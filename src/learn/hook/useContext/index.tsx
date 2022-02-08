import { FC, Fragment, ReactNode, useContext } from 'react'
import { View } from '@tarojs/components'
import { UserInfoContext } from '../../../tool/context'

type AppProps = {
	children?: ReactNode
}

export const ProvideInject: FC<AppProps> = () => {
	// 第一种使用方法
	// 通过userContext，使用定义好的UserInfoContext
	const { userInfo } = useContext(UserInfoContext)

	return (
		<Fragment>
			{/*第二种使用方法*/}
			{/*消费者,用 Consumer 订阅， 来自 Provider 中 value 的改变*/}
			<UserInfoContext.Consumer>
				{(v) => {
					return <View>{v.userInfo.name}</View>
				}}
			</UserInfoContext.Consumer>

			<View className='provide-inject'>{userInfo.name}</View>
			<br />
		</Fragment>
	)
}
