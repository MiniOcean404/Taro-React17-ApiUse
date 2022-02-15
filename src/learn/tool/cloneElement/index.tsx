// createElement: 把我们写的jsx，变成element对象;
// cloneElement: 作用是以 element 元素为样板克隆并返回新的 React 元素。返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。
// 那么cloneElement感觉在我们实际业务组件中，可能没什么用，但是在一些开源项目，或者是公共插槽组件中用处还是蛮大的，比如说，我们可以在组件中，劫持children element，
// 然后通过cloneElement克隆element，混入props。经典的案例就是 react-router中的Swtich组件，通过这种方式，来匹配唯一的 Route并加以渲染。
// 我们设置一个场景，在组件中，去劫持children，然后给children赋能一些额外的props:

import { cloneElement, Component } from 'react'
import { View } from '@tarojs/components'

function FatherComponent({ children }) {
	const newChildren = cloneElement(children, { age: 18 })
	return <View> {newChildren} </View>
}

function SonComponent(props) {
	console.log(props)
	return <View>hello,world</View>
}

export class CloneElement extends Component {
	render() {
		return (
			<View className='box'>
				<FatherComponent>
					<SonComponent name='alien' />
				</FatherComponent>
			</View>
		)
	}
}
