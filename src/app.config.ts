// RN端不支持 export default defineAppConfig({})
// Taro的RN端需要https://github.com/wuba/Taro-Mortgage-Calculator的安卓ios壳文件（将taro编译的js发送到这个RN壳文件中渲染）
export default {
	pages: ['pages/index/index'],
	// 通用
	window: {
		navigationBarTitleText: '首页', // 导航栏标题文字内容
		navigationBarTextStyle: 'black', // 导航栏标题颜色，仅支持 black / white
		navigationBarBackgroundColor: '#fff', // 导航栏背景颜色
		navigationStyle: 'default', // 导航栏样式，仅支持以下值：default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮
		backgroundTextStyle: 'light', // 下拉 loading 的样式，仅支持 dark / light
		backgroundColor: '', // 窗口的背景色
		backgroundColorTop: '#ffffff', // 顶部窗口的背景色，仅 iOS 支持
		backgroundColorBottom: '#ffffff', // 底部窗口的背景色，仅 iOS 支持
		enablePullDownRefresh: false, // 是否开启当前页面的下拉刷新。
		onReachBottomDistance: '50', // 页面上拉触底事件触发时距页面底部距离，单位为 px
		pageOrientation: 'portrait', // 屏幕旋转设置，支持 auto / portrait / landscape 详见 响应显示区域变化
	},
	tabBar: {
		list: [
			//最少 2 个、最多 5 个 tab
			{
				pagePath: '', // 页面路径，必须在 pages 中先定义
				text: '首页', // tab 上按钮文字
				iconPath: '', // 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，不支持网络图片。 当 position 为 top 时，不显示 icon。
				selectedIconPath: '', // 选中时的图片路径
			},
		],
		color: '', //	tab 上的文字默认颜色，仅支持十六进制颜色
		selectedColor: '', // tab 上的文字选中时的颜色，仅支持十六进制颜色
		backgroundColor: '', // tab 的背景色，仅支持十六进制颜色
		borderStyle: 'black', //tabbar 上边框的颜色， 仅支持 black / white
		position: 'bottom', //tabBar的位置，仅支持 bottom / top
		custom: 'false', //自定义 tabBar
	},
	subPackages: {},
}
