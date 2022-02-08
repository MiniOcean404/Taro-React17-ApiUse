import { Component, memo } from 'react'
import { View } from '@tarojs/components'
import { memoState } from 'src/types'

function TextMemo(props) {
	console.log('子组件渲染')
	if (props) return <View>hello,world</View>

	return null
}

const controlIsRender = (pre, next) => {
	if (pre.number === next.number) {
		// number 不改变 ，不渲染组件
		return true
	} else return pre.number !== next.number && next.number > 5
}

// React.memo和PureComponent作用类似，可以用作性能优化，React.memo 是高阶组件，函数组件和类组件都可以使用，和区别PureComponent是
// React.memo只能对props的情况确定是否渲染，而PureComponent是针对props和state。
const NewTexMemo = memo(TextMemo, controlIsRender)

export default class Memo extends Component<{}, memoState> {
	constructor(props) {
		super(props)
		this.state = {
			number: 1,
		}
	}

	render() {
		const { number } = this.state

		return (
			<>
				return{' '}
				<View>
					<View>
						改变number： 当前值 {number}
						<button onClick={() => this.setState({ number: number + 1 })}> number ++</button>
						<button onClick={() => this.setState({ number: number - 1 })}> number -- </button>
					</View>

					{/*值改变，根据prop true false进行渲染*/}
					<NewTexMemo number={number} />
				</View>
				<br />
			</>
		)
	}
}
