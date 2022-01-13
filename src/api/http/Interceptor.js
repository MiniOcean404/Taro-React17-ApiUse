import { currentConfig } from 'api/http/config';
import { netFail, netSuccess } from './business/conditions';
import whitelist from './whitelist';

// 接口URL
let url;
let token;
let userCode;

export function invoke(args) {
	uni.showLoading({
		title: '加载中..',
		mask: true,
	});
	url = args.url;
	// 是否对组件包装的上传方法进行配置
	const havePrefix = url.startsWith('http://') || url.startsWith('https://');

	// 添加接口前缀
	if (!havePrefix && currentConfig.baseUrl) {
		args.url = currentConfig.baseUrl + args.url;
	}

	// token信息
	const isAddToken = whitelist.some((i) => {
		return i.exec(args.url);
	});
	if (isAddToken && token && userCode && !havePrefix) {
		args.header.token = token;
		args.header.userCode = userCode;
	} else if (isAddToken && !havePrefix) {
		const vuex = localStorage.getItem('vuex') ? JSON.parse(localStorage.getItem('vuex')) : null;
		args.header.token = token = vuex ? vuex.user.token : '';
		args.header.userCode = userCode = vuex ? vuex.user.visitId : '';
	}

	return args;
}

export function success(args) {
	uni.hideLoading();
	const { statusCode } = args;

	// * 网络状态码处理
	if (statusCode === 200) {
		netSuccess(args, url);
	} else if (statusCode !== 200) {
		netFail(args);
	}
	return args;
}

export function fail(err) {
	console.error(`失败拦截:${JSON.stringify(err)}`);
}

export function complete(res) {}
