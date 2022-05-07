// import gsap from 'gsap'
import * as THREE from 'three'
import { ImgUrl } from '@/pages/3d/three/data'

export class Toggle {
	start(cb) {
		cb()
	}

	// onMouseClick(e) {
	// 	e.preventDefault()
	// 	let element = this.$refs.threeDBox
	// 	let raycaster = new THREE.Raycaster()
	// 	let mouse = new THREE.Vector2()
	// 	mouse.x = (e.clientX / element.clientWidth) * 2 - 1
	// 	mouse.y = -(e.clientY / element.clientHeight) * 2 + 1
	// 	raycaster.setFromCamera(mouse, this.camera)
	// 	let intersects = raycaster.intersectObjects(this.tipsSpriteList, true)
	// 	if (intersects.length > 0 && intersects[0].object.content.showTitle) {
	// 		this.changeContentAndtips(intersects[0].object.content.image)
	// 		this.handleTooltipHide(e)
	// 	}
	// }

	// changeContentAndtips(index) {
	// 	// 重新加载贴图，这边应用gasp做一个简单的过渡动画，将透明度从0 ~ 1
	// 	// gsap.to(sphereMaterial, { transparent: true, opacity: 1, duration: 2 })
	// 	// 手动更新投影矩阵
	// 	this.camera.updateProjectionMatrix()
	// 	// 添加当前场景标签
	// 	this.addTipsSprite(index)
	// }
}
