export enum ImgUrl {
	house = 'http://wo-insure-test.bhfae.com/zkr/admin//uploadpic/bd88f0d5637e4e748ad6967aa5c0f73clivingRoom.daa88722.jpg',
	tip = 'http://wo-insure-test.bhfae.com/zkr/admin//uploadpic/dcdb661cc32c49e781b0990f827904b8tip.1fcbc2bb.png',
}

export const tipsList = [
	// 标签数据
	{
		position: { x: 0, y: 3, z: 20 }, // 标签位置
		content: {
			// 标签内容
			title: '进入厨房', // 标题
			text: '', // 文本内容
			image: 1, // 场景贴图的下标，对应dataList下标
			showTip: true, // 是否展示弹出框
			showTitle: true, // 是否展示提示标题
		},
	},
	{
		position: { x: -200, y: -4, z: -147 }, // 标签位置
		content: {
			// 标签内容
			title: '进入厨房', // 标题
			text: '', // 文本内容
			image: 1, // 场景贴图的下标，对应dataList下标
			showTip: false, // 是否展示弹出框
			showTitle: true, // 是否展示提示标题
		},
	},
	{
		position: { x: -100, y: 0, z: -231 },
		content: {
			title: '信息点2',
			text: '77989',
			showTip: true,
			showTitle: false,
		},
	},
	{
		position: { x: 150, y: -50, z: -198 },
		content: {
			title: '信息点3',
			text: 'qwdcz',
			showTip: true,
			showTitle: false,
		},
	},
	{
		position: { x: 210, y: 11, z: -140 },
		content: {
			title: '信息点4',
			text: '大豆食心虫侦察十大大苏打大大大大大大大',
			showTip: true,
			showTitle: false,
		},
	},
	{
		position: { x: 208, y: -12, z: 140 },
		content: {
			title: '信息点5',
			text: 'eq',
			showTip: true,
			showTitle: false,
		},
	},
	{
		position: { x: 86, y: -9, z: 236 },
		content: {
			title: '进入房间',
			text: '',
			showTip: false,
			showTitle: true,
		},
	},
]

export const dataList = [
	{
		// image: require('@/assets/image/livingRoom.jpg'), // 场景贴图
	},
	{
		// image: require('@/assets/image/kitchen.jpg'),
		tipsList: [
			{
				position: { x: -199, y: -24, z: 145 },
				content: {
					title: '进入大厅',
					text: '',
					image: 0,
					showTip: false,
					showTitle: true,
				},
			},
		],
	},
]
