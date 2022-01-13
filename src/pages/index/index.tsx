import { Component, Fragment } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'
import { State } from 'src/types'
import SButton from '../../components/button'

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
		console.log('组件渲染中')
		const { isShow } = this.state
		return (
			<Fragment>
				<View id='index'>
					<AtButton type='primary' onClick={this.toggle}>
						切换
					</AtButton>
					<Text>{isShow ? '你好' : <div>我不好</div>}</Text>
				</View>

				<View id='prop'>
					<SButton value={isShow}> </SButton>
				</View>
			</Fragment>
		)
	}
}
