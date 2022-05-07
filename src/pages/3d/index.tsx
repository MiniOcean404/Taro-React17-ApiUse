import { useLayoutEffect, useRef, useState } from 'react'
import { MeshEle } from './three/mesh'
import { isWEB } from '@/tool/runtimeEnv'
import './index.scss'
import { Three3DOperate } from './three/threeD'
import { Tip } from './three/tip'
import { Toggle } from './three/toggle'
import { View } from '@tarojs/components'

export default function Three3DHouse() {
	// 初始化位置全部在屏幕之外
	const [tipPosition, setTipPosition] = useState({
		top: '-100%',
		left: '-100%',
	})
	const [titlePosition, setTitlePosition] = useState({
		top: '-100%',
		left: '-100%',
	})
	const [topContent] = useState({ title: '', text: '' })

	// 获取DOM
	const threeDBox = useRef(null)
	const tipBox = useRef(null)
	const titleBox = useRef(null)

	useLayoutEffect(() => {
		if (isWEB) {
			window.addEventListener('resize', () => {}, false)
			Three3DOperate.addStats()

			// 初始化
			;(async function () {
				const three3DOperate = new Three3DOperate(threeDBox.current)

				const house = (three3DOperate.threeProp.mesh = await MeshEle.house())
				const tips = await MeshEle.tip()

				three3DOperate.initRendererCameraScene()
				three3DOperate.addMesh(house)
				tips.forEach((i: any) => {
					three3DOperate.addMesh(i)
				})
				three3DOperate.addControls()
				three3DOperate.addDom()

				new Tip(
					three3DOperate.threeProp,
					{ dom: tipBox.current, position: tipPosition, fn: setTipPosition },
					{ dom: titleBox.current, position: titlePosition, fn: setTitlePosition },
				)

				// const toogle = new Toggle()
				// toogle.start(() => {
				// 	three3DOperate.clearTypeMesh('Sprite')
				// three3DOperate.updateMesh(MeshEle.kitchen())
				// })
			})()
		}
	}, [])

	return (
		<>
			<View id='home'>
				{/* 3D容器 */}
				<View className='box' ref={threeDBox} />

				{/* 标题  */}
				<View className='tip' style={tipPosition} ref={tipBox}>
					<View className='title'>标题：{topContent.title}</View>
					<View className='explain'>说明：{topContent.text}</View>
				</View>

				{/* 文本 */}
				<View className='title-tip' ref={titleBox} style={titlePosition}>
					{topContent.title}
				</View>
			</View>
		</>
	)
}
