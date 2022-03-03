import { View, Text } from '@tarojs/components'
import { AtAvatar, AtButton } from 'taro-ui'
import './index.scss'
import { isWeAPP } from '../../tool/runtimeEnv'

export default function Mine() {
	async function loginFn() {
		if (isWeAPP) {
		}
	}

	return (
		<View className='home'>
			<View className={'atAvatar-content'}>
				<AtAvatar className={'atAvatar'} circle />
			</View>

			<View className={'content'}>
				<AtButton className={'login'} type='primary' onClick={() => loginFn()} size={'normal'}>
					<Text>登录</Text>
				</AtButton>
			</View>
		</View>
	)
}
