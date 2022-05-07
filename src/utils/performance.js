// 节流
export function throttle(fn, delay) {
	let valid = true //是否是工作状态
	return function () {
		//休息时间 暂不接客
		if (!valid) return false

		// 工作时间，执行函数并且在间隔期内把状态位设为无效
		valid = false
		setTimeout(() => {
			fn()
			valid = true
		}, delay)
	}
}
