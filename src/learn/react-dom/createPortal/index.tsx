import { Component, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { View } from '@tarojs/components'

// Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。createPortal 可以把当前组件或 element 元素的子节点，渲染到组件之外的其他地方。
// 场景：
//    比如一些全局的弹窗组件model,<Model/>组件一般都写在我们的组件内部，倒是真正挂载的dom，都是在外层容器，比如body上。此时就很适合createPortalAPI。
// 参数：（被挂载的元素，要挂载的DOM）=> 被标记的被挂载的元素（随便位置）等待渲染时候 转移到 引用DOM位置

function Mount({ children }) {
	const domRef = useRef(null)
	const [generateElement, setElement] = useState(null)

	console.log(children)
	useEffect(() => {
		setElement(createPortal(children, domRef.current))
	}, [])

	return (
		<View>
			<View>没被挂载</View>
			<View ref={domRef}>被挂载的引用</View>

			{generateElement}
		</View>
	)
}

export class CreatePortal extends Component {
	render() {
		return (
			<Mount>
				<View>我是要被挂载的元素</View>
			</Mount>
		)
	}
}
