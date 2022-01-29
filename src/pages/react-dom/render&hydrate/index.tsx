import { render } from 'react-dom'
import { View } from '@tarojs/components'

const Text = () => <View>react-dom-render</View>
export function ReactDOMRender() {
	render(<Text />, document.getElementById('ReactDOMMount'))
}

// 服务端渲染用hydrate。用法与 render() 相同，但它用于在 ReactDOMServer 渲染的容器中对 HTML 的内容进行 hydrate 操作。
// ReactDOM.hydrate(element, container[, callback])
