import devConfig from 'env/.env.dev';
import testConfig from 'env/.env.test';
import prdConfig from 'env/.env.prd';
import uatConfig from 'env/.env.uat';
import uatHostConfig from 'env/.env.uat-host';
import Vue from 'vue';

const ENV = {
	online: devConfig,
	test: testConfig,
	production: prdConfig,
	uat: uatConfig,
	uatHost: uatHostConfig,
};

export const currentConfig = ENV[process.env.VUE_APP_ENV];
Vue.prototype.$gtLoginUrl = currentConfig.gtLoginUrl; // 国腾登录链接前缀
Vue.prototype.$appId = currentConfig.appId; // 微信appid
Vue.prototype.$baseUrl = currentConfig.baseUrl; // 接口前缀
Vue.prototype.$loginUrl = currentConfig.loginUrl; // 跳转登录页后回跳自己的地址ip(自己的ip)
Vue.prototype.$planLink = currentConfig.planLink; // 百宝科技
Vue.prototype.$logoURl = currentConfig.logoURl; // 跳转登录页后回跳自己的地址ip(自己的ip)
Vue.prototype.$datingBack = currentConfig.datingBack; // 可回溯接口路径

if (currentConfig.datingBack !== undefined) {
	localStorage.setItem('this.$datingBack', currentConfig.datingBack);
}

export default {};
