import { Component, forwardRef } from 'react'
import { View, Text } from '@tarojs/components'

function Son(props) {
	const { grandRef } = props
	return (
		<View>
			<View> i am alien </View>
			<Text ref={grandRef}>这个是想要获取元素</Text>
		</View>
	)
}

class Father extends Component<any, any> {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View>
				<Son grandRef={this.props.grandRef} />
			</View>
		)
	}
}

// react不允许ref通过props传递，因为组件上已经有 ref 这个属性,在组件调和过程中，已经被特殊处理，
// forwardRef出现就是解决这个问题，把ref转发到自定义的forwardRef定义的属性上，让ref，可以通过props传递。
// 将指针传递
const NewFather = forwardRef((props, ref) => {
	return <Father grandRef={ref} {...props} />
})

export class ForWardRef extends Component<any, any> {
	node: unknown

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log(this.node)
	}

	render() {
		return (
			<>
				<View>
					<NewFather ref={(node) => (this.node = node)} />
				</View>

				<br />
			</>
		)
	}
}
