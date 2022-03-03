import './index.scss'
import LookHouse from './LookHouse'

export default function THREE3D() {
	new LookHouse()
	LookHouse.addStats()

	return (
		<>
			<div id='container'> </div>
		</>
	)
}
