/**
 * 等比例压缩图片
 * @param file 原始图片
 * @param limitWidth 限制宽度
 * @param limitHeight 限制高度
 * @param quality 压缩质量, 默认0.92
 */
export default async function fileToBlobScaled(file, limitWidth, limitHeight, quality = 0.92) {
	let drawable = await createImageBitmap(file)
	let sw = drawable.width
	let sh = drawable.height
	const canvas = document.createElement('canvas')
	let scale = Math.min(limitWidth / sw  , limitHeight / sh)

	// 限制尺寸大于原始尺寸，无需缩放
	if (scale > 1) scale = 1

	canvas.width = sw * scale
	canvas.height = sh * scale

	const ctx = canvas.getContext('2d')

	if (!ctx) throw new Error('Could not create canvas context')
	ctx.drawImage(drawable, 0, 0, sw, sh, 0, 0, sw * scale, sh * scale)

	let type = 'image/jpeg'
	let blob = await new Promise(r => canvas.toBlob(r, type, quality))

	// console.log('原尺寸', sw, sh)
	// console.log('限制尺寸', limitWidth, limitHeight)
	// console.log('现尺寸', sw * scale, sh * scale)
	// console.log('比例', scale)

	// return ctx.getImageData(0, 0, width, height);
	// return canvas.toDataURL(type, quality)
	return blob
}


