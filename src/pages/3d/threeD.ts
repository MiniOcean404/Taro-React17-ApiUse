import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/examples/js/libs/stats.min.js' // 帧率渲染监视器

export class InitThreeD {
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

	constructor(threeDBox) {
		this.threeProp.box = threeDBox
	}

	public async init(cb) {
		this.initRendererCameraScene()

		// 场景添加网格、坐标轴辅助线
		cb(this.threeProp.scene, this.threeProp.mesh)

		this.addControls()
		requestAnimationFrame(this.render.bind(this)) // 初次渲染，控制渲染频率
		this.threeProp.box!.appendChild(this.threeProp.renderer.domElement) // 添加DOM

		// 监听tip
		// this.threeProp.renderer.domElement.addEventListener(
		// 	'mousemove',
		// 	this.onMousemove.bind(this),
		// 	false,
		// )
		// this.threeProp.renderer.domElement.addEventListener('mouseleave', this.handleTooltipHide, false)
	}

	// 初始化渲染器、相机、场景
	private initRendererCameraScene() {
		this.threeProp.renderer.setPixelRatio(this.winProp.devicePixelRatio)
		this.threeProp.renderer.setSize(this.winProp.innerWidth, this.winProp.innerHeight)

		// 透视相机位置(垂直视野角度,视锥体长宽比,视锥体近端面,视锥体远端面)

		this.threeProp.camera.position.set(0.3, 0, 0) // 设置相机距离x,y,z距离

		// 场景 x,y,z
		this.threeProp.scene.add(new THREE.AxesHelper(3000))
	}

	// 给球体添加控制器
	private addControls() {
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
		InitThreeD.stat && InitThreeD.stat.update()
		this.threeProp.renderer.render(this.threeProp.scene, this.threeProp.camera)
	}

	// 添加性能监视器
	public static addStats() {
		InitThreeD.stat = Stats()
		document.body.appendChild(InitThreeD.stat.dom)
	}
}
