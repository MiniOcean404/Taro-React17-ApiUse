import { Component, Fragment } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { State } from 'src/types'

export default class ClassComponent extends Component<{}, State> {
	// react 17 改为 UNSAFE_
	// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
	// UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
	// 	console.log('不安全：将要更新')
	// 	return true
	// }
	//
	// UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
	// 	console.log('不安全：将要接收属性')
	// }
	//
	// UNSAFE_componentWillMount() {
	// 	console.log('不安全：将要挂载')
	// }

	// 更新钩子1 -> render
	// true 执行render 否则不执行任何
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return true
	}

	// render -> 更新钩子2 -> React 更新 DOM 和 refs
	getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>): any {
		console.log('获取快照')
	}

	// 更新钩子3
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('更新完成')
		return true
	}

	// render -> React 更新 DOM 和 refs -> 挂载钩子
	componentDidMount() {
		console.log('挂载完成')
	}

	componentWillUnmount() {
		console.log('将要卸载')
	}

	componentDidShow() {}

	componentDidHide() {}

	// 除了卸载钩子 更新挂载都会第一个走这个 (使用这个所有的UNSAFE钩子不执行)
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
