import { Component, forwardRef, useImperativeHandle, useRef, useState } from 'react'

// useImperativeHandle 可以配合 forwardRef 自定义暴露给父组件的实例值(给对应的ref放置对应的实例值)。
// 这个很有用，我们知道，对于子组件，如果是class类组件，我们可以通过ref获取类组件的实例，
// 但是在子组件是函数组件的情况，如果我们不能直接通过ref的，那么此时useImperativeHandle和 forwardRef配合就能达到效果。

// useImperativeHandle接受三个参数：
//     第一个参数ref: 接受 forWardRef 传递过来的 ref。
//     第二个参数 createHandle ：处理函数，返回值作为暴露给父组件的ref对象。
//     第三个参数 deps:依赖项 deps，依赖项更改形成新的ref对象。

function Son(_props, ref) {
	const inputRefDom = useRef<HTMLInputElement | null>(null)
	const [inputValue, setInputValue] = useState('')

	useImperativeHandle(
		ref,
		() => {
			return {
				onFocus() {
					inputRefDom.current?.focus()
				},
				onChangeValue(value) {
					setInputValue(value)
				},
			}
		},
		[],
	)

	return (
		<div>
			<input placeholder='请输入内容' ref={inputRefDom} value={inputValue} />
		</div>
	)
}

const ForwardSon = forwardRef(Son)

export class UseImperativeHandleHook extends Component {
	inputRef
	constructor(props) {
		super(props)

		this.handClick = this.handClick.bind(this)
	}

	handClick() {
		const { onFocus, onChangeValue } = this.inputRef
		onFocus()
		onChangeValue('输入框值改变了')
	}

	render() {
		return (
			<div>
				<ForwardSon
					ref={(node) => {
						this.inputRef = node
					}}
				/>
				<button onClick={this.handClick}>操控子组件</button>
			</div>
		)
	}
}
