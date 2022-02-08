import { Children, Component } from 'react'
import { View } from '@tarojs/components'

class Text extends Component {
	render() {
		return <View>hello,world</View>
	}
}

function WarpComponent({ children }) {
	const newChild = Children.map(children, (item) => item)
	// Children.forEach(children, (item) => console.log('React.Children-forEach', item))
	const childrenCount = Children.count(children) // 子的所有个数
	const newChildrenArray = Children.toArray(children) // children扁平化后结果。

	console.log('React.Children-Map', children, newChild)
	console.log('React.Children-Count', childrenCount)
	console.log('React.Children-toArray', newChildrenArray)
	// console.log(Children.only(children)) // 验证 children 是否只有一个子节点（一个 React 元素），如果有则返回它，否则此方法会抛出错误。
	return newChild
}

export const ChildrenMapForEachCountToArrayOnly = () => {
	return (
		<WarpComponent>
			{new Array(3)
				.fill(0)
				.map((_item, index) =>
					new Array(2).fill(1).map((_item, index1) => <Text key={index + index1} />),
				)}
			<View>React.Children</View>
		</WarpComponent>
	)
}
