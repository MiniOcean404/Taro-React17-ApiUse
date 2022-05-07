import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/examples/js/libs/stats.min.js' // 帧率渲染监视器

export class Three3DOperate {
	public static stat

	private readonly winProp: any = {
		devicePixelRatio: window.devicePixelRatio,
		width: null,
		height: null,
	}

	public threeProp: any = {
		dom: null,
		// 渲染器创建
		renderer: new THREE.WebGLRenderer(),
		// 创建相机
		camera: null,
		// 创建场景
		scene: new THREE.Scene(),
		mesh: null,
	}

	constructor(threeDDom, width = window.innerWidth, height = window.innerHeight) {
		this.threeProp.dom = threeDDom
		this.winProp.width = width
		this.winProp.height = height

		this.threeProp.camera = new THREE.PerspectiveCamera(
			90,
			this.winProp.width / this.winProp.height,
			0.1,
			100,
		)
	}

	// 初始化渲染器、相机、场景
	public initRendererCameraScene() {
		this.threeProp.renderer.setPixelRatio(this.winProp.devicePixelRatio)
		this.threeProp.renderer.setSize(this.winProp.width, this.winProp.height)

		// 透视相机位置(垂直视野角度,视锥体长宽比,视锥体近端面,视锥体远端面)
		this.threeProp.camera.position.set(0.3, 0, 0) // 设置相机距离x,y,z距离

		// 场景 x,y,z
		this.threeProp.scene.add(new THREE.AxesHelper(3000))
	}

	public addMesh(mesh) {
		this.threeProp.scene.add(mesh)
	}

	// 给球体添加控制器
	public addControls() {
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

		requestAnimationFrame(this.render.bind(this)) // 初次渲染，控制渲染频率
	}

	public addDom() {
		if (document.querySelector('#threeJs')) return
		this.threeProp.renderer.domElement.id = 'threeJs'
		this.threeProp.dom!.appendChild(this.threeProp.renderer.domElement) // 添加DOM
	}

	clearTypeMesh(type) {
		if (!type) this.threeProp.scene.children = []

		// 清除场景数据内所有的精灵标签
		this.threeProp.scene.children = this.threeProp.scene.children.filter(
			(item) => item.type !== type,
		)
	}

	updateMesh(mesh) {
		if (!mesh) return

		this.threeProp.mesh.material = mesh
	}

	private render() {
		Three3DOperate.stat && Three3DOperate.stat.update()
		this.threeProp.renderer.render(this.threeProp.scene, this.threeProp.camera)
	}

	// 添加性能监视器
	public static addStats() {
		Three3DOperate.stat = Stats()
		document.body.appendChild(Three3DOperate.stat.dom)
	}
}
