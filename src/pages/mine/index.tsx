import { View, Text } from '@tarojs/components'
import { AtAvatar, AtButton } from 'taro-ui'
import './index.scss'
import { isWeAPP } from '../../tool/runtimeEnv'

export default function () {
	async function loginFn() {
		if (isWeAPP) {
		}
	}

	function getPhone(res) {
		console.log(res)
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

				<AtButton
					className={'login'}
					type='primary'
					size={'normal'}
					openType={'getPhoneNumber'}
					onGetPhoneNumber={getPhone}>
					<Text>登录</Text>
				</AtButton>
			</View>
		</View>
	)
}
