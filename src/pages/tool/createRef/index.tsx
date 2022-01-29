import { useEffect, useRef, createRef, Component } from 'react'

export const CreateRef = () => {
	const node = useRef(null)

	useEffect(() => {
		console.log(node.current)
	}, [])

	return <div ref={node}> useRef </div>
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
				<div ref={this.node}> my name is alien </div>

				{/*第二种直接赋值*/}
				<div ref={() => this.node}> my name is alien </div>
			</>
		)
	}
}
