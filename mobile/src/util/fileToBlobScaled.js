/**
 * 等比例压缩图片
 * @param file 原始图片
 * @param limitWidth 限制宽度
 * @param limitHeight 限制高度
 * @param quality 压缩质量, 默认0.92
 * @param orientation 方向元信息，移动端IOS需要注意是，使用压缩后会清除掉图像方向信息，导致上传后图片旋转
 */
export default async function fileToBlobScaled(file, limitWidth, limitHeight, quality = 0.92, orientation = 1) {

	if (!('createImageBitmap' in window)) {
		window.createImageBitmap = async function (blob) {
			return new Promise((resolve, reject) => {
				let img = document.createElement('img')
				img.addEventListener('load', function () {
					resolve(this)
				})
				img.src = URL.createObjectURL(blob)
			})
		}
	}

	let drawable = await createImageBitmap(file)
	let sw = drawable.width
	let sh = drawable.height
	const canvas = document.createElement('canvas')
	let scale = Math.min(limitWidth / sw, limitHeight / sh)

	// 限制尺寸大于原始尺寸，无需缩放
	if (scale > 1) scale = 1
	// 等比例缩放后的宽高
	let newWidth = sw * scale
	let newHeight = sh * scale

	const ctx = canvas.getContext('2d')
	if (!ctx) throw new Error('Could not create canvas context')

	switch (orientation) {
		case 3:
			// 代表用户竖着iphone自拍
			canvas.width = newWidth
			canvas.height = newHeight
			ctx.rotate(Math.PI)
			ctx.drawImage(drawable, 0 - newWidth, 0 - newHeight, newWidth, newHeight)
			break
		case 6:
			// 代表用户横着iphone自拍，且摄像头在左侧
			canvas.width = newHeight
			canvas.height = newWidth
			ctx.rotate(Math.PI / 2)
			ctx.drawImage(drawable, 0, 0 - newHeight, newWidth, newHeight)
			break
		case 8:
			canvas.width = newHeight
			canvas.height = newWidth
			ctx.rotate(3 * Math.PI / 2)
			ctx.drawImage(drawable, 0 - newWidth, 0, newWidth, newHeight)
			break
		default :
			canvas.width = newWidth
			canvas.height = newHeight
			ctx.drawImage(drawable, 0, 0, sw, sh, 0, 0, newWidth, newHeight)
	}

	let type = 'image/jpeg'
	let blob = await new Promise(r => canvas.toBlob(r, type, quality))

	// DEBUG
	// console.log('原尺寸', sw, sh)
	// console.log('限制尺寸', limitWidth, limitHeight)
	// console.log('现尺寸', sw * scale, sh * scale)
	// console.log('比例', scale)

	// return ctx.getImageData(0, 0, width, height);
	// return canvas.toDataURL(type, quality)
	return blob
}


