import { View } from '@tarojs/components'
import { createElement, Fragment } from 'react'

// 编译后
// render() {
//   return React.createElement("View", { className: "box" },
//     React.createElement("View", { className: "item" }, "\u751F\u547D\u5468\u671F"),
//     React.createElement(React.Fragment, null, " Flagment "),
//     "text\u6587\u672C");
// }

// 第一个参数:
//    如果是组件类型，会传入组件，
//    如果是dom元素类型，传入div或者span之类的字符串。
// 第二个参数:
//    第二个参数为一个对象，在dom类型中为属性，在组件类型中为props。
// 其他参数:
//    依次为children，根据顺序排列。

// createElement做了些什么？
// 经过createElement处理，最终会形成 $$typeof = Symbol(react.element)对象。对象上保存了该react.element的信息。
export const CreateElementUse = () => {
	console.log(
		'createElement使用',
		createElement('View', { className: 'box' }, [createElement('text', { key: '1' }, '子文本')]),
	)

	return (
		<View className='box'>
			<View className='item'>生命周期</View>
			<Fragment> Fragment </Fragment>
			{/*  */}
			text文本
		</View>
	)
}
