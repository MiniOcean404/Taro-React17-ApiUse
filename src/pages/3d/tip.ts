import * as THREE from 'three'

export class Tip {
	public threeProp
	public tips

	public tip: any = {
		box: null,
		position: null,
	}

	public title: any = {
		box: null,
		position: null,
	}

	public content

	constructor(threeProp, tipBox, titleBox) {
		this.threeProp = threeProp
		this.tips = this.threeProp.scene.children.filter((i) => {
			return i.type === 'Sprite'
		})

		this.tip.box = tipBox
		this.title.box = titleBox
		const canvansDom = this.threeProp.renderer.domElement

		// 监听tip
		canvansDom.addEventListener('mousemove', this.onMousemove.bind(this), false)
		canvansDom.addEventListener('mouseleave', this.handleTooltipHide, false)
	}

	onMousemove(e) {
		const { box, camera } = this.threeProp

		//  光线投射用于进行鼠标拾取（在三维空间中计算出鼠标移过了什么物体）
		let raycaster = new THREE.Raycaster()
		// 表示2D vector（二维向量）的类。 一个二维向量是一对有顺序的数字（标记为x和y）
		let mouse = new THREE.Vector2()
		// 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
		mouse.x = (e.clientX / box.clientWidth) * 2 - 1
		mouse.y = -(e.clientY / box.clientHeight) * 2 + 1
		// 通过摄像机和鼠标位置更新射线
		raycaster.setFromCamera(mouse, camera)

		// 将标签精灵数据放进来做视线交互
		let intersects = raycaster.intersectObjects(this.tips, true)

		if (intersects.length > 0) console.log(intersects)

		// 视线穿过集合选择最前面的一个
		if (intersects.length > 0) {
			// 将标签的空间坐标转屏幕坐标，通过计算赋给元素的top、left
			let boxWidth = box.clientWidth / 2
			let boxHeight = box.clientHeight / 2

			// 该类表示的是一个三维向量（3D vector）。 一个三维向量表示的是一个有顺序的、三个为一组的数字组合（标记为x、y和z）
			let worldVector = new THREE.Vector3(
				intersects[0].object.position.x,
				intersects[0].object.position.y,
				intersects[0].object.position.z,
			)
			let position = worldVector.project(camera)
			this.content = intersects[0].object.content

			// 判断展示tip还是title
			if (intersects[0].object.content.showTip) {
				let left = Math.round(boxWidth * position.x + boxWidth - this.tip.box!.clientWidth / 2)
				let top = Math.round(-boxHeight * position.y + boxHeight - this.tip.box!.clientHeight / 2)

				this.tip.position = {
					left: `${left}px`,
					top: `${top}px`,
				}
			} else if (intersects[0].object.content.showTitle) {
				let left = Math.round(boxWidth * position.x + boxWidth - this.title.box.clientWidth / 2)
				let top = Math.round(-boxHeight * position.y + boxHeight)
				this.title.position = {
					left: `${left}px`,
					top: `${top}px`,
				}
			}
		} else {
			// 鼠标移出去隐藏所有
			this.handleTooltipHide(e)
		}
	}

	handleTooltipHide(e) {
		// e.preventDefault()
		// this.tooltipPosition = {
		// 	top: '-100%',
		// 	left: '-100%',
		// }
		// this.titlePosition = {
		// 	top: '-100%',
		// 	left: '-100%',
		// }
		// this.tooltopContent = {}
	}
}
