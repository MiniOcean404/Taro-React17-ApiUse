import { FC, isValidElement } from 'react'
import { View } from '@tarojs/components'

type Props = {}

// 是否是有效的react元素
export const Index: FC<Props> = ({ children }) => {
	const newChild = (children as Array<any>).filter((item) => isValidElement(item))
	return <> {newChild} </>
}

const Text = () => <View>有效元素1</View>

export const IsValidElement = () => {
	return (
		<Index>
			<Text />
			<View> 有效元素2 </View>
			无效元素
		</Index>
	)
}
