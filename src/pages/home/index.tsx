import './index.scss'
import { Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import { useState } from 'react'
import Taro from '@tarojs/taro'

export default function HomePage() {
	const swiperList: string[] = [
		'http://tva1.sinaimg.cn/large/005J4OU5ly1gyje6w579oj30tr0trgpk.jpg',
		'http://tva1.sinaimg.cn/large/005J4OU5ly1gyje6y3q7qj30v30v2wj4.jpg',
		'http://tva1.sinaimg.cn/large/005J4OU5ly1gyje6xm76nj30w00w0n24.jpg',
	]

	const [searchWin, searchWinFn] = useState('')

	async function go3D() {
		await Taro.navigateTo({
			url: '/pages/3d/index',
		})
	}

	return (
		<>
			<AtSearchBar value={searchWin} onChange={(v) => searchWinFn(v)} />
			<Swiper
				className='swiper-p'
				indicatorColor='#F7E78BFF'
				indicatorActiveColor='#333'
				circular
				indicatorDots
				autoplay
				interval={3000}>
				{swiperList.map((i, index) => {
					return (
						<SwiperItem key={index}>
							<Image className={'swiper'} src={i} />
						</SwiperItem>
					)
				})}
			</Swiper>
			<button onClick={() => go3D()}>3d</button>
		</>
	)
}
