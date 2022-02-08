// 从 DOM 中卸载组件，会将其事件处理器和 state 一并清除。
//    如果指定容器上没有对应已挂载的组件，这个函数什么也不会做。
//    如果组件被移除将会返回 true ，如果没有组件可被移除将会返回 false 。

import { View } from '@tarojs/components'
import { Component } from 'react'
import { unmountComponentAtNode, render } from 'react-dom'

function Text() {
	return <View>UnmountComponentAtNode挂载的元素</View>
}

// 从 DOM 中卸载组件，会将其事件处理器和 state 一并清除。
// 如果指定容器上没有对应已挂载的组件，这个函数什么也不会做。
// 如果组件被移除将会返回 true ，如果没有组件可被移除将会返回 false
export class UnmountComponentAtNode extends Component {
	node = null
	constructor(props) {
		super(props)

		this.state = {
			num: 1,
		}
	}
	componentDidMount() {
		/*  组件初始化的时候，创建一个 container 容器 */
		render(<Text />, this.node)
	}

	click = () => {
		/* 点击卸载容器 */
		const state = unmountComponentAtNode(this.node)
		console.log(state)
	}

	render() {
		return (
			<View>
				<View ref={(node) => (this.node = node)}> </View>
				<button onClick={this.click}>click me</button>
			</View>
		)
	}
}
