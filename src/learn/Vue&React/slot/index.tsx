import { FC, Fragment, ReactElement, ReactNode, useState } from 'react'
import { Text, View } from '@tarojs/components'

type AppProps = {
	children?: ReactNode
	nameSlot: ReactElement
	scopeSlot: Function
}

// React没有计算属性，但是我们可以通过useMemo这个hook来实现，和Vue computed不太一样的地方在于，我们必须手动维护依赖
export const Slot: FC<AppProps> = ({ children, nameSlot, scopeSlot }) => {
	const [userInfo] = useState({ name: '用户名' })

	return (
		<Fragment>
			<Text>标题：默认插槽</Text>
			<View>{children}</View>
			<br />
			<Text>标题：具名插槽</Text>
			<View>{nameSlot}</View>
			<br />
			<Text>作用域插槽</Text>
			<View>{scopeSlot(userInfo)} </View>
			<br />
		</Fragment>
	)
}
