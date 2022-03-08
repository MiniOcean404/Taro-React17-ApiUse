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
		</>
	)
}
