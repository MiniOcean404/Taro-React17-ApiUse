import { useLayoutEffect, useRef, useState } from 'react'
import { MeshEle } from './mesh'
import { isWEB } from '../../../src/tool/runtimeEnv'
import './index.scss'
import { InitThreeD } from './threeD'
import { Tip } from './tip'

export default function THREED() {
	// 初始化位置全部在屏幕之外
	const [tipPosition] = useState({
		top: '-100%',
		left: '-100%',
	})
	const [titlePosition] = useState({
		top: '-100%',
		left: '-100%',
	})
	const [topContent] = useState({ title: '', text: '' })

	const threeDBox = useRef(null)
	const tipBox = useRef(null)
	const titleBox = useRef(null)

	useLayoutEffect(() => {
		if (isWEB) {
			const initThreeD = new InitThreeD(threeDBox.current)
			InitThreeD.addStats()

			// 初始化
			;(async function () {
				const house = await MeshEle.custom3DBall()
				const tips = await MeshEle.customTip()

				initThreeD.init((scene) => {
					scene.add((initThreeD.threeProp.mesh = house))
					tips.forEach((i: any) => {
						scene.add(i)
					})
				})

				new Tip(initThreeD.threeProp, tipBox, titleBox)
			})()
		}
	}, [])

	return (
		<>
			<div id='home'>
				{/* 3D容器 */}
				<div className='Box' ref={threeDBox}></div>

				{/* 标题  */}
				<div style={tipPosition} ref={tipBox}>
					<div className='title'>标题：{topContent.title}</div>
					<div className='explain'>说明：{topContent.text}</div>
				</div>

				{/* 文本 */}
				<p className='title-text' ref={titleBox} style={titlePosition}>
					{topContent.title}
				</p>
			</div>
		</>
	)
}
