// 将传递的elements 赋值为any类型数组，就可以使用了
export function tuple<T extends any[]>(...elements: T) {
	return elements
}
