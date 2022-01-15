// RN端不支持 export default defineAppConfig({})
// Taro的RN端需要https://github.com/wuba/Taro-Mortgage-Calculator的安卓ios壳文件（将taro编译的js发送到这个RN壳文件中渲染）
export default {
	pages: ['pages/index/index'],
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: 'WeChat',
		navigationBarTextStyle: 'black',
	},
}
