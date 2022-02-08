import Lazy from './lazy'
import { Component, lazy, Suspense } from 'react'
import { View } from '@tarojs/components'

const LazyComponent = lazy(
	() =>
		new Promise<{ default: () => JSX.Element }>((res) => {
			setTimeout(() => {
				res({
					default: () => <Lazy />,
				})
			}, 2000)
		}),
)

const LazyLoading = lazy(() => import('./lazy')) // 懒加载

// React.lazy和Suspense配合一起用，能够有动态加载组件的效果。
// React.lazy 接受一个函数，这个函数需要动态调用 import()。
// 它必须返回一个 Promise ，该 Promise 需要 resolve 一个 default export 的 React 组件。
export class LazyAndSuspense extends Component {
	render() {
		return (
			<View className='context_box' style={{ marginTop: '50px' }}>
				<Suspense fallback={<View className='icon'>没有加载前的样式</View>}>
					<LazyComponent />
					<LazyLoading />
				</Suspense>
			</View>
		)
	}
}
