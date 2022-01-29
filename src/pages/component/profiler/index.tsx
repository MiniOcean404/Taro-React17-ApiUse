import { View } from '@tarojs/components'
import { Profiler } from 'react'

// Profiler 需要两个参数：
// 第一个参数：是 id，用于表识唯一性的Profiler。
// 第二个参数：onRender回调函数，用于渲染完成，接受渲染参数。

// onRender
//
// 0 -id: root  ->  Profiler 树的 id 。
// 1 -phase: mount ->  mount 挂载 ， update 渲染了。
// 2 -actualDuration: 6.685000262223184  -> 更新 committed 花费的渲染时间。
// 3 -baseDuration:  4.430000321008265  -> 渲染整颗子树需要的时间
// 4 -startTime : 689.7299999836832 ->  本次更新开始渲染的时间
// 5 -commitTime : 698.5799999674782 ->  本次更新committed 的时间
// 6 -interactions: set{} -> 本次更新的 interactions 的集合

export const ProfilerUse = () => {
	const cb = (...arg) => console.log(arg)

	return (
		<>
			<Profiler id={'speed'} onRender={cb}>
				<View>测试时间</View>
			</Profiler>
		</>
	)
}
