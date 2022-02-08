import { useEffect, useRef, createRef, Component } from 'react'
import { View } from '@tarojs/components'

export const CreateRef = () => {
	const node = useRef(null)

	useEffect(() => {
		console.log('CreateRef', node.current)
	}, [])

	return <View ref={node}> useRef </View>
}

// 类组件中使用
export class Index extends Component<any, any> {
	node

	constructor(props) {
		super(props)
		this.node = createRef()
	}

	componentDidMount() {
		console.log(this.node)
	}

	render() {
		return (
			<>
				{/*第一种使用createRef创建*/}
				<View ref={this.node}> my name is alien </View>

				{/*第二种直接赋值*/}
				<View ref={() => this.node}> my name is alien </View>
			</>
		)
	}
}
