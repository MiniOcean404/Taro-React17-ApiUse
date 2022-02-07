// import { flushSync } from 'react-dom'
import { Component } from 'react'
import { View } from '@tarojs/components'

// flushSync 可以将回调函数中的更新任务，放在一个较高的优先级中。
// 我们知道react设定了很多不同优先级的更新任务。
// 如果一次更新任务在flushSync回调函数内部，那么将获得一个较高优先级的更新
export class FlushSync extends Component {
	state = { number: 0 }

	handClick = () => {
		setTimeout(() => {
			this.setState({ number: 1 })
		})

		this.setState({ number: 2 })

		// flushSync(() => {
		// 	this.setState({ number: 3 })
		// })

		this.setState({ number: 4 })
	}

	render() {
		const { number } = this.state
		console.log(number) // 打印什么？？
		return (
			<View>
				<View>{number}</View>
				<button onClick={this.handClick}>测试flushSync</button>
			</View>
		)
	}
}
