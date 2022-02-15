import './index.scss'
import { Swiper, SwiperItem } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import { useState } from 'react'

export default function () {
	const swiperList: string[] = [
		'http://tva1.sinaimg.cn/large/005J4OU5ly1gyje6w579oj30tr0trgpk.jpg',
		'http://tva1.sinaimg.cn/large/005J4OU5ly1gyje6y3q7qj30v30v2wj4.jpg',
		'http://tva1.sinaimg.cn/large/005J4OU5ly1gyje6xm76nj30w00w0n24.jpg',
	]

	const [searchWin, searchWinFn] = useState('')

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
							<img className={'swiper'} src={i} alt='' />
						</SwiperItem>
					)
				})}
			</Swiper>
		</>
	)
}
