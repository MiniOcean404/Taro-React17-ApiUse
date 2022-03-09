import { isWEB } from '../../../src/tool/runtimeEnv'
import './index.scss'
import LookHouse from './LookHouse'

export default function THREE3D() {
	if (isWEB) {
		new LookHouse()
		LookHouse.addStats()
	}

	return (
		<>
			<div id='container'> </div>

			{/* <div class='tooltip-box' style='tooltipPosition' ref='tooltipBox'>
				<div className='container'>
					<div className='title'>标题：{tooltopContent.title}</div>
					<div className='explain'>说明：{tooltopContent.text}</div>
				</div>
			</div> */}
		</>
	)
}
