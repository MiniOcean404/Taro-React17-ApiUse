import { Component, Fragment } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'
import { State } from 'src/types'
import SButton from '../../components/button'

import { FC } from '../function-component-FC'
import { FCUseStateHook } from '../hook-useState'
import { VIfVShow } from '../v-if&v-show'
import { VFor } from '../v-for'
import { Computed } from '../computed'
import { Watch } from '../watch'
import { StyleClass } from '../style-class'
import { UserInfoContext } from '../../context'
import { ProvideInject } from '../provide-inject'
import { Slot } from '../slot'

export default class Index extends Component<undefined | null, State> {
	// shouldComponentUpdate(nextProps, nextState, nextContext) {
	//   return true
	// }

	// componentWillUpdate(nextProps, nextState, nextContext) {
	//     console.log('组件将要更新')
	//     return true
	// }

	// componentDidUpdate(prevProps, prevState, snapshot) {
	//   console.log('组件更新完成')
	//   return true
	// }

	// componentWillReceiveProps(nextProps, nextContext) {
	//     console.log('组件将要接收属性')
	// }

	// componentWillMount() {
	//     console.log('组件将要挂载')
	// }

	componentWillMount() {}

	componentDidMount() {
		console.log('组件挂载完成')
	}

	componentWillUnmount() {
		console.log('组件将要卸载')
	}

	componentDidShow() {}

	componentDidHide() {}

	constructor(prop) {
		super(prop)

		this.state = {
			isShow: false,
		}

		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState(
			{
				isShow: !this.state.isShow,
			},
			() => {
				// setState是异步更新，之后重新渲染，所以通过回调 等到组件渲染完成再log
				console.log(this.state.isShow)
			},
		)
	}

	render() {
		const { isShow } = this.state
		return (
			<Fragment>
				<UserInfoContext.Provider value={{ userInfo: { name: '前端胖头鱼' } }}>
					{/*<Routes>*/}
					{/*<Route path='/v-if' element={<Vif />} />*/}
					{/*</Routes>*/}

					{/*正常写法*/}
					<View id='index'>
						<AtButton type='primary' onClick={this.toggle}>
							切换
						</AtButton>
						<Text>{isShow ? '你好' : '我不好'}</Text>
					</View>

					{/*传递父子关系*/}
					<View id='prop'>
						<SButton value={isShow}> </SButton>
					</View>

					{/*函数式组件*/}
					<FC message='函数式组件'>传递children</FC>

					{/*函数式组件*/}
					<FCUseStateHook>1</FCUseStateHook>

					<VIfVShow />
					<VFor />
					<Computed />
					<Watch />
					<StyleClass />
					<ProvideInject />

					<Slot
						nameSlot={<View>具名插槽</View>}
						scopeSlot={(userInfo) => <div>{userInfo.name}</div>}>
						默认插槽
					</Slot>
				</UserInfoContext.Provider>
			</Fragment>
		)
	}
}
