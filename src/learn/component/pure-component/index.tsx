import { PureComponent, Fragment } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { State } from 'src/types'

// PureComponent和 Component用法，差不多一样，
// 唯一不同的是，纯组件PureComponent会浅比较，props和state是否相同，来决定是否重新渲染组件。
// 所以一般用于性能调优，减少render次数 (创建新对象就会不渲染了)
export default class ClassComponent extends PureComponent<{}, State> {
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
	// 纯组件不能使用此钩子
	// shouldComponentUpdate(nextProps, nextState, nextContext) {
	// 	return true
	// }

	// render -> 更新钩子2 -> React 更新 DOM 和 refs
	// getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>): any {
	// 	console.log('获取快照')
	// }
	//
	// // 更新钩子3
	// componentDidUpdate(prevProps, prevState, snapshot) {
	// 	console.log('更新完成')
	// 	return true
	// }

	// render -> React 更新 DOM 和 refs -> 挂载钩子
	componentDidMount() {
		console.log('PureComponent', '挂载完成')
	}

	componentWillUnmount() {
		console.log('PureComponent', '将要卸载')
	}

	componentDidShow() {}

	componentDidHide() {}

	// 除了卸载钩子 更新挂载都会第一个走这个 (使用这个所有的UNSAFE钩子不执行)
	// static getDerivedStateFromProps(props, state) {
	// 	return null
	// }

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
