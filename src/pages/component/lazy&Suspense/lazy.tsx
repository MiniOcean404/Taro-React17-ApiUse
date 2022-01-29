import { Component } from 'react'

export default class Lazy extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		console.log('lazy组件挂载')
	}
	render() {
		return (
			<div>
				<img
					src={'http://tva1.sinaimg.cn/large/0070XTeOgy1gwc6mpnwbzj30sg0sg773.jpg'}
					className='alien'
					width={30}
					height={30}
					alt='1'
				/>
			</div>
		)
	}
}
