// token数据为空
// eslint-disable-next-line import/no-cycle
import { clearAccountInfoAndLogin, clearAccountGoIndexPage } from 'common/utils/login';
export function tokenIsNull() {
	uni.showToast({
		title: '请先登录后再进行相关操作',
		icon: 'none',
		duration: 3000,
	});
	throw new Error('token数据为空');
}

// token校验失败
export function tokenInvalid() {
	uni.showModal({
		title: '提示',
		content: '当前账户登录已经失效,是否重新登录',
		success(res) {
			if (res.confirm) {
				clearAccountInfoAndLogin();
			} else if (res.cancel) {
				clearAccountGoIndexPage();
			}
		},
	});
}

// 后端消息提示
export function errorTip({ msg }) {
	uni.showToast({
		title: msg,
		icon: 'none',
		duration: 3000,
	});

	console.error('后端提示：' + msg);
}

// 后端没有任何数据返回的数据处理
export function noData(url) {
	const reg = /(?:\/[a-zA-Z]+)+/gims;
	const path = reg.exec(url)?.[0];

	throw new Error(`\r\n后端数据没有任何返回\r\n接口地址:${path}`);
}

export function stream(res) {
	return res;
}
