import { Component } from 'react'
import { View } from '@tarojs/components'
import { unstable_batchedUpdates } from 'react-dom'

// 在react-legacy模式下，对于事件，react事件有批量更新来处理功能,但是这一些非常规的事件中，批量更新功能会被打破。
// 所以我们可以用react-dom中提供的unstable_batchedUpdates 来进行批量更新。
// 在执行异步时候会setState导致渲染多次，使用unstable_batchedUpdates只会渲染一次（性能优化）
export class Unstable_BatchedUpdates extends Component<any, any> {
	constructor(props) {
		super(props)

		this.state = {
			num: 0,
		}
	}

	// 多次执行只执行最后一个,渲染次数一次。
	click = () => {
		this.setState({ num: this.state.num + 1 })
		console.log(this.state.num)
		this.setState({ num: this.state.num + 1 })
		console.log(this.state.num)
		this.setState({ num: this.state.num + 1 })
		console.log(this.state.num)
	}

	// 批量更新条件被打破,渲染次数三次。
	promiseBreak = () => {
		Promise.resolve().then(() => {
			this.setState({ num: this.state.num + 1 })
			console.log(this.state.num)
			this.setState({ num: this.state.num + 1 })
			console.log(this.state.num)
			this.setState({ num: this.state.num + 1 })
			console.log(this.state.num)
		})
	}

	// unstable_batchedUpdate助力,渲染次数一次,完美解决批量更新问题。
	update = () => {
		Promise.resolve().then(() => {
			unstable_batchedUpdates(() => {
				this.setState({ num: this.state.num + 1 })
				console.log(this.state.num)
				this.setState({ num: this.state.num + 1 })
				console.log(this.state.num)
				this.setState({ num: this.state.num + 1 })
				console.log(this.state.num)
			})
		})
	}

	render() {
		return (
			<View>
				{this.state.num}
				<button onClick={this.click}>click me</button>
				<button onClick={this.promiseBreak}>promiseBreak</button>
				<button onClick={this.update}>update</button>
			</View>
		)
	}
}
