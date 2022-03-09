import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/examples/js/libs/stats.min.js' // 帧率渲染监视器
import { dataList, ImgUrl } from './data'
import { imgTextureLoad } from './utils'

export default class LookHouse {
	public static stat

	private renderer
	private scene
	private camera
	private mesh

	private tipsSpriteList: Object[] = []

	constructor() {
		this.init()
	}

	private async init() {
		this.initRendererCameraScene()

		// 场景添加网格、坐标轴辅助线
		this.scene.add((this.mesh = await this.custom3DBall()))
		this.tipsSpriteList = await this.customTip()
		this.tipsSpriteList.forEach((i) => {
			this.scene.add(i)
		})

		this.addControls()
		// 初次渲染，控制渲染频率
		requestAnimationFrame(this.render.bind(this))

		// 添加DOM
		const container = document.querySelector('#container')
		container!.appendChild(this.renderer.domElement)
	}

	initRendererCameraScene() {
		// 渲染器创建
		this.renderer = new THREE.WebGLRenderer()
		this.renderer.setPixelRatio(window.devicePixelRatio)
		this.renderer.setSize(window.innerWidth, window.innerHeight)

		// 透视相机位置(垂直视野角度,视锥体长宽比,视锥体近端面,视锥体远端面)
		this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 100)
		this.camera.position.set(0.3, 0, 0) // 设置相机距离x,y,z距离

		this.scene = new THREE.Scene()
		// 场景 x,y,z
		this.scene.add(new THREE.AxesHelper(3000))
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
		const spriteList: Object[] = []

		const tipTexture = await imgTextureLoad(ImgUrl.tip) // 创建纹理
		let tipMaterial = new THREE.SpriteMaterial({ map: tipTexture })
		dataList[0].tipsList.forEach((i) => {
			let sprite = new THREE.Sprite(tipMaterial)
			sprite.scale.set(1, 1, 1)
			sprite.position.set(i.position.x, i.position.y, i.position.z) // 设置标签位置
			sprite.content = i.content // 设置标签内容

			spriteList.push(sprite) // 储存标签
		})

		return spriteList
	}

	// 给球体添加控制器
	addControls() {
		// 轨道控制器
		const controls = new OrbitControls(this.camera, this.renderer.domElement)
		// 可缩放距离
		controls.minDistance = 1
		controls.maxDistance = 200
		//启用或禁用摄像机平移
		controls.enablePan = false

		controls.target.copy(this.mesh.position)
		controls.addEventListener('change', this.render.bind(this))
		// controls.update() // 控制器需要
	}

	private render() {
		LookHouse.stat && LookHouse.stat.update()
		this.renderer.render(this.scene, this.camera)
	}

	// 添加性能监视器
	public static addStats() {
		LookHouse.stat = Stats()
		document.body.appendChild(LookHouse.stat.dom)
	}
}
