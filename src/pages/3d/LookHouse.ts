import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/examples/js/libs/stats.min.js' // 帧率渲染监视器

enum ImgUrl {
	house = 'https://qhyxpicoss.kujiale.com/r/2019/07/01/L3D137S8ENDIADDWAYUI5L7GLUF3P3WS888_3000x4000.jpg?x-oss-process=image/resize,m_fill,w_1600,h_920/format.webp',
}

export default class LookHouse {
	private renderer
	private scene
	private camera
	private mesh
	public static stat

	constructor() {
		this.init()
	}

	init() {
		// 渲染器创建
		this.renderer = new THREE.WebGLRenderer()
		this.renderer.setPixelRatio(window.devicePixelRatio)
		this.renderer.setSize(window.innerWidth, window.innerHeight)

		// 场景 x,y,z
		this.scene = new THREE.Scene()

		// 透视相机位置
		this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 100)
		this.camera.position.set(-0.3, 0, 0)

		this.createMesh(ImgUrl.house).then((res) => {
			if (res) {
				// 创建网格
				this.scene.add(this.mesh)
				// 坐标轴辅助线
				this.scene.add(new THREE.AxesHelper(1000))
				this.createControls()

				// 初次渲染
				requestAnimationFrame(this.render.bind(this))

				// 添加DOM
				const container = document.querySelector('#container')
				container!.appendChild(this.renderer.domElement)
			}
		})
	}

	// 创建元素、网格
	private createMesh(url) {
		return new Promise((res) => {
			new THREE.TextureLoader().load(url, (texture) => {
				const material = new THREE.MeshBasicMaterial({ map: texture })

				material.side = THREE.DoubleSide
				const geometry = new THREE.SphereGeometry(50, 256, 256)
				this.mesh = new THREE.Mesh(geometry, material)

				res(true)
			}) // 创建纹理
		})
	}

	private createControls() {
		// 轨道控制器
		const controls = new OrbitControls(this.camera, this.renderer.domElement)
		controls.addEventListener('change', this.render.bind(this))
		// 可缩放距离
		controls.minDistance = 1
		controls.maxDistance = 200

		controls.enablePan = false

		controls.target.copy(this.mesh.position)
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
