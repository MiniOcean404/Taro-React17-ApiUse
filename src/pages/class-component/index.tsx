import { Component, Fragment } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { State } from 'src/types'

export default class ClassComponent extends Component<{}, State> {
	// react 17 改为 UNSAFE_
	// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
	UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
		console.log('不安全：将要更新')
		return true
	}

	UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
		console.log('不安全：将要接收属性')
	}

	UNSAFE_componentWillMount() {
		console.log('不安全：将要挂载')
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return true
	}

	getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>): any {}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('更新完成')
		return true
	}

	componentDidMount() {
		console.log('挂载完成')
	}

	componentWillUnmount() {
		console.log('将要卸载')
	}

	componentDidShow() {}

	componentDidHide() {}

	static getDerivedStateFromProps(props, state) {}

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
				<View id='index'>
					<AtButton type='primary' onClick={this.toggle}>
						切换
					</AtButton>
					<Text>{isShow ? '你好' : '我不好'}</Text>
				</View>

				<br />
			</Fragment>
		)
	}
}
