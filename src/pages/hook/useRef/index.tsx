import { FC, useRef } from 'react'
import { View } from '@tarojs/components'

type AppProps = {}

export const UseRefHook: FC<AppProps> = () => {
	const dom = useRef(null)
	const submit = () => {
		/*  <View >表单组件</View>  dom 节点 */
		console.log(dom.current)
	}
	return (
		<View>
			{/* ref 标记当前dom节点 */}
			<View ref={dom}>表单组件</View>
			<button onClick={() => submit()}>提交</button>
		</View>
	)
}
