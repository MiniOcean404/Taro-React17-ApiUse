import * as THREE from 'three'
import { tipsList, ImgUrl } from './data'
import { imgTextureLoad } from './utils'

// 创建网格、元素
export class MeshEle {
	// 3D球体
	static async house() {
		// 创建元素、网格
		const houseTexture = await imgTextureLoad(ImgUrl.house) // 创建纹理
		// 创建网格材质
		const material = new THREE.MeshBasicMaterial({ map: houseTexture })
		material.side = THREE.DoubleSide

		// 创建几何图形
		const geometry = new THREE.SphereGeometry(25, 256, 256) // 球半径大小，球的水平面的面数，球的垂直面的面数
		return new THREE.Mesh(geometry, material)
	}

	static kitchen() {
		let texture = imgTextureLoad(ImgUrl.kitchen)
		return new THREE.MeshBasicMaterial({
			map: texture,
			transparent: true,
			opacity: 0,
		})
	}

	// 自定义提示精灵图
	static async tip() {
		const tipTexture = await imgTextureLoad(ImgUrl.tip) // 创建纹理
		let tipMaterial = new THREE.SpriteMaterial({ map: tipTexture })

		return tipsList.map<Object>((i) => {
			let sprite = new THREE.Sprite(tipMaterial)
			sprite.scale.set(1, 1, 1)
			sprite.position.set(i.position.x, i.position.y, i.position.z) // 设置标签位置
			sprite.content = i.content // 设置标签内容

			return sprite
		})
	}
}
