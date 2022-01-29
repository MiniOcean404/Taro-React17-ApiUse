import { Component, forwardRef, useEffect, useRef } from 'react'
import { View } from '@tarojs/components'

class Index extends Component<any, any> {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log('HocForwardRef:', '被获取的componentDidMount函数')
	}

	render() {
		return <View>HocForwardRef</View>
	}
}

// 高阶组件转发Ref
// 由于属性代理的hoc，被包裹一层，所以如果是类组件，是通过ref拿不到原始组件的实例的，不过我们可以通过forWardRef转发ref。
function HOC(Com) {
	class Wrap extends Component<any, any> {
		render() {
			const { forwardedRef, ...otherProps } = this.props
			return <Com ref={forwardedRef} {...otherProps} />
		}
	}

	return forwardRef((props, ref) => <Wrap forwardedRef={ref} {...props} />)
}

const HocIndex = HOC(Index)

export const HocForwardRef = () => {
	const node = useRef<null | any>(null)

	useEffect(() => {
		/* 就可以跨层级，捕获到 Index 组件的实例了 */
		console.log('HocForwardRef', node.current?.componentDidMount)
	}, [])

	return (
		<View>
			<HocIndex ref={node} />
		</View>
	)
}
