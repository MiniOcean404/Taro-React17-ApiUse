import { Fragment } from 'react'

// Fragment区别是，Fragment可以支持key属性。<></>不支持key属性。
// 提示:我们通过map遍历后的元素，react底层会处理，默认在外部嵌套一个<Fragment>。
export const FragmentUse = () => {
	return (
		<Fragment>
			<Fragment>Fragment</Fragment>
			<>{'<></>'}</>
		</Fragment>
	)
}
