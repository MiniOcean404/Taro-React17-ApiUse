import { ENV_TYPE, getEnv } from '@tarojs/taro'

export const isWeAPP = getEnv() === ENV_TYPE.WEAPP
export const isWEB = getEnv() === ENV_TYPE.WEB
export const isJD = getEnv() === ENV_TYPE.JD
export const isQQ = getEnv() === ENV_TYPE.QQ
export const isRN = getEnv() === ENV_TYPE.RN
export const isSWAN = getEnv() === ENV_TYPE.SWAN
export const isALIPAY = getEnv() === ENV_TYPE.ALIPAY
export const isTT = getEnv() === ENV_TYPE.TT
