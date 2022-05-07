import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/examples/js/libs/stats.min.js' // 帧率渲染监视器
import { tipsList, ImgUrl } from './data'
import { imgTextureLoad } from './utils'

export default class LookHouse {
	public static stat

	private readonly winProp = {
		devicePixelRatio: window.devicePixelRatio,
		innerWidth: window.innerWidth,
		innerHeight: window.innerHeight,
	}

	public threeProp: any = {
		box: null,
		// 渲染器创建
		renderer: new THREE.WebGLRenderer(),
		// 创建相机
		camera: new THREE.PerspectiveCamera(
			90,
			this.winProp.innerWidth / this.winProp.innerHeight,
			0.1,
			100,
		),
		// 创建场景
		scene: new THREE.Scene(),
		mesh: null,
	}

	public tip: any = {
		box: null,
		position: null,
	}

	public title: any = {
		box: null,
		position: null,
	}

	public content

	private tipsSpriteList: Object[] = []

	constructor(threeDBox, tipBox, titleBox, tipPosition, titlePosition, content) {
		this.threeProp.box = threeDBox
		this.tip.box = tipBox
		this.title.box = titleBox

		this.tip.position = tipPosition
		this.title.position = titlePosition
		this.content = content

		this.init()
	}

	private async init() {
		this.initRendererCameraScene()

		// 场景添加网格、坐标轴辅助线
		this.threeProp.scene.add((this.threeProp.mesh = await this.custom3DBall()))
		this.tipsSpriteList = await this.customTip()
		this.tipsSpriteList.forEach((i: any) => {
			this.threeProp.scene.add(i.sprite)
		})

		this.addControls()
		// 初次渲染，控制渲染频率
		requestAnimationFrame(this.render.bind(this))
		// 添加DOM
		this.threeProp.box!.appendChild(this.threeProp.renderer.domElement)

		this.threeProp.renderer.domElement.addEventListener(
			'mousemove',
			this.onMousemove.bind(this),
			false,
		)
		this.threeProp.renderer.addEventListener('mouseleave', this.handleTooltipHide, false)
	}

	// 初始化渲染器、相机、场景
	initRendererCameraScene() {
		this.threeProp.renderer.setPixelRatio(this.winProp.devicePixelRatio)
		this.threeProp.renderer.setSize(this.winProp.innerWidth, this.winProp.innerHeight)

		// 透视相机位置(垂直视野角度,视锥体长宽比,视锥体近端面,视锥体远端面)

		this.threeProp.camera.position.set(0.3, 0, 0) // 设置相机距离x,y,z距离

		// 场景 x,y,z
		this.threeProp.scene.add(new THREE.AxesHelper(3000))
	}

	// 3D球体
	async custom3DBall() {
		// 创建元素、网格
		const houseTexture = await imgTextureLoad(ImgUrl.house) // 创建纹理
		// 创建网格材质
		const material = new THREE.MeshBasicMaterial({ map: houseTexture })
		material.side = THREE.DoubleSide

		// 创建几何图形
		const geometry = new THREE.SphereGeometry(25, 256, 256) // 球半径大小，球的水平面的面数，球的垂直面的面数
		return new THREE.Mesh(geometry, material)
	}

	// 自定义提示精灵图
	async customTip() {
		const tipTexture = await imgTextureLoad(ImgUrl.tip) // 创建纹理
		let tipMaterial = new THREE.SpriteMaterial({ map: tipTexture })

		return tipsList.map<Object>((i) => {
			let sprite = new THREE.Sprite(tipMaterial)
			sprite.scale.set(1, 1, 1)
			sprite.position.set(i.position.x, i.position.y, i.position.z) // 设置标签位置
			sprite.content = i.content // 设置标签内容
			i['sprite'] = sprite

			return i
		})
	}

	// 给球体添加控制器
	addControls() {
		// 轨道控制器
		const controls = new OrbitControls(this.threeProp.camera, this.threeProp.renderer.domElement)
		// 可缩放距离
		controls.minDistance = 1
		controls.maxDistance = 200
		//启用或禁用摄像机平移
		controls.enablePan = false

		controls.target.copy(this.threeProp.mesh!.position)
		controls.addEventListener('change', this.render.bind(this))
		// controls.update() // 控制器需要
	}

	private render() {
		LookHouse.stat && LookHouse.stat.update()
		this.threeProp.renderer.render(this.threeProp.scene, this.threeProp.camera)
	}

	onMousemove(e) {
		e.preventDefault()

		let element = this.threeProp.box
		let raycaster = new THREE.Raycaster()
		let mouse = new THREE.Vector2()
		// 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
		mouse.x = (e.clientX / element.clientWidth) * 2 - 1
		mouse.y = -(e.clientY / element.clientHeight) * 2 + 1
		raycaster.setFromCamera(mouse, this.threeProp.camera)

		const list: any = []
		this.tipsSpriteList.forEach((item) => {
			list.push((item as any).sprite)
		})

		// 将标签精灵数据放进来做视线交互
		let intersects = raycaster.intersectObjects(list, true)

		// 视线穿过集合选择最前面的一个
		if (intersects.length > 0) {
			// 将标签的空间坐标转屏幕坐标，通过计算赋给元素的top、left
			let elementWidth = element.clientWidth / 2
			let elementHeight = element.clientHeight / 2
			let worldVector = new THREE.Vector3(
				intersects[0].object.position.x,
				intersects[0].object.position.y,
				intersects[0].object.position.z,
			)
			let position = worldVector.project(this.threeProp.camera)

			this.content = intersects[0].object.content

			if (intersects[0].object.content.showTip) {
				let left = Math.round(
					elementWidth * position.x + elementWidth - this.tip.box!.clientWidth / 2,
				)
				let top = Math.round(
					-elementHeight * position.y + elementHeight - this.tip.box!.clientHeight / 2,
				)

				this.tip.position = {
					left: `${left}px`,
					top: `${top}px`,
				}
			} else if (intersects[0].object.content.showTitle) {
				let left = Math.round(
					elementWidth * position.x + elementWidth - this.title.box.clientWidth / 2,
				)
				let top = Math.round(-elementHeight * position.y + elementHeight)
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

	handleTooltipHide(e) {}

	// 添加性能监视器
	public static addStats() {
		LookHouse.stat = Stats()
		document.body.appendChild(LookHouse.stat.dom)
	}
}
