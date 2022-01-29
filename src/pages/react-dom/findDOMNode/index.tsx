import { View } from '@tarojs/components'
import { Component } from 'react'
import { findDOMNode } from 'react-dom'

//!不期望使用findDOMNode。
// findDOMNode用于访问组件DOM元素节点，react推荐使用ref模式，
// 注意的是：
//   1 findDOMNode只能用在已经挂载的组件上。
//   2 如果组件渲染内容为 null 或者是 false，那么 findDOMNode返回值也是 null。
//   3 findDOMNode 不能用于函数组件。
export class Index extends Component {
	findDom = () => {
		console.log(findDOMNode(this))
	}
	render() {
		return (
			<View>
				<View>hello,world</View>
				<button onClick={this.findDom}>获取容器dom</button>
			</View>
		)
	}
}
