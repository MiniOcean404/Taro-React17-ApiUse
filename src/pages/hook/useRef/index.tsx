import { FC, useRef } from 'react'

type AppProps = {}

export const UseRefHook: FC<AppProps> = () => {
	const dom = useRef(null)
	const submit = () => {
		/*  <div >表单组件</div>  dom 节点 */
		console.log(dom.current)
	}
	return (
		<div>
			{/* ref 标记当前dom节点 */}
			<div ref={dom}>表单组件</div>
			<button onClick={() => submit()}>提交</button>
		</div>
	)
}
