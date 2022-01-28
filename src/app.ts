import { PureComponent } from 'react'
import './app.scss'

class App extends PureComponent {
	componentDidMount() {}

	componentDidShow() {}

	componentDidHide() {}

	componentDidCatchError() {}

	// this.props.children 是将要会渲染的页面
	render() {
		return this.props.children
	}
}

export default App
