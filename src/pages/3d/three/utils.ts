import * as THREE from 'three'

export function imgTextureLoad(url) {
	return new Promise((res, rej) => {
		new THREE.TextureLoader().load(
			url,
			(texture) => {
				res(texture)
			},
			null,
			() => {
				rej(null)
			},
		)
	})
}
