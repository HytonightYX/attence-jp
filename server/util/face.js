require("@tensorflow/tfjs-node");
var faceapi = require("./face-api.js");
var canvas = require('canvas');

const FACE_PARAMS = 0.5
const minConfidence = 0.5;
const inputSize = 408;
const scoreThreshold = 0.5;
const minFaceSize = 50;
const scaleFactor = 0.8;

var faceDetectionNet = faceapi.nets.ssdMobilenetv1;
var Canvas = canvas.Canvas, Image = canvas.Image, ImageData = canvas.ImageData;
faceapi.env.monkeyPatch({ Canvas: Canvas, Image: Image, ImageData: ImageData });

function getFaceDetectorOptions(net) {
    return net === faceapi.nets.ssdMobilenetv1
        ? new faceapi.SsdMobilenetv1Options({ minConfidence: minConfidence })
        : (net === faceapi.nets.tinyFaceDetector
            ? new faceapi.TinyFaceDetectorOptions({ inputSize: inputSize, scoreThreshold: scoreThreshold })
            : new faceapi.MtcnnOptions({ minFaceSize: minFaceSize, scaleFactor: scaleFactor }));
}
faceDetectionOptions = getFaceDetectorOptions(faceDetectionNet);


async function faceDetect(REF_IMG,QRY_IMG) {
  try {

    console.log('ref'+REF_IMG)
    console.log('qry'+QRY_IMG)

	  // 加载68pix模型
	  await faceDetectionNet.loadFromDisk('./weights')
	  await faceapi.nets.faceLandmark68Net.loadFromDisk('./weights')
	  await faceapi.nets.faceRecognitionNet.loadFromDisk('./weights')
	  
	  // 加载图片
	  const refImg = await canvas.loadImage(REF_IMG)
	  const qryImg = await canvas.loadImage(QRY_IMG)
	  
	  // 生成节点模型
	  const refRet = await faceapi.detectAllFaces(refImg, faceDetectionOptions)
	    .withFaceLandmarks().withFaceDescriptors()
	  const qryRet = await faceapi.detectAllFaces(qryImg, faceDetectionOptions)
	    .withFaceLandmarks().withFaceDescriptors()

	  // 计算匹配度
	  const faceMatcher = new faceapi.FaceMatcher(refRet)

	  // 匹配识别图片
	  const ret = qryRet.map(res => {
	    const bestMatch = faceMatcher.findBestMatch(res.descriptor)
	    console.log(bestMatch._distance)
	    return (bestMatch._distance > FACE_PARAMS)?false:true
	  })
		
	  console.log(ret)
		return ret
	}catch (error) { 
   // your catch block code goes here
   console.log(error)
   return 1
  }
}

module.exports = {
	faceDetect
}


// var REF_IMG = './img/ref.jpg';
// var QRY_IMG = './img/04.jpg';