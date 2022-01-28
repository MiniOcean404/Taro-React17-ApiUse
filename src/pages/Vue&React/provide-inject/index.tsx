import { FC, Fragment, ReactNode, useContext } from 'react'
import { UserInfoContext } from '../../../context'
import { View } from '@tarojs/components'

type AppProps = {
	children?: ReactNode
}

export const ProvideInject: FC<AppProps> = () => {
	// 通过userContext，使用定义好的UserInfoContext
	const { userInfo } = useContext(UserInfoContext)

	return (
		<Fragment>
			<View className='provide-inject'>{userInfo.name}</View>
			<br />
		</Fragment>
	)
}
