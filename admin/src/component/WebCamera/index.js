import React, { Component } from 'react'
import { Button } from 'antd'

class CameraFeed extends Component {
	async componentDidMount() {
		const cameras = await navigator.mediaDevices.enumerateDevices()
		this.setState({
			width: this.props.width || 350,
			height: this.props.height || 450
		})
		this.processDevices(cameras)
	}

	processDevices(devices) {
		devices.forEach(device => {
			this.setDevice(device).catch(e => {})
		})
	}

	async setDevice(device) {
		const {deviceId} = device
		const stream = await navigator.mediaDevices.getUserMedia({audio: false, video: {deviceId}})
		this.videoPlayer.srcObject = stream
		this.videoPlayer.play().catch(e => {})
	}

	takePhoto = () => {
		const {sendFile} = this.props
		const canvas = document.createElement('canvas');
		canvas.width = 350;
		canvas.height = 450;
		const context = canvas.getContext('2d')
		context.drawImage(this.videoPlayer,125, 0, 350, 450, 0, 0, 350, 450)
		canvas.toBlob(sendFile, 'image/jpeg')
	}

	blobToBase64(blob) {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.onload = (e) => {
				resolve(e.target.result);
			};
			// readAsDataURL
			fileReader.readAsDataURL(blob);
			fileReader.onerror = () => {
				reject(new Error('文件流异常'));
			};
		});
	}

	render() {
		return (
			<div className="c-camera-wrap">
				<div className="c-camera-feed__viewer">
					<video ref={ref => (this.videoPlayer = ref)} width="600" height="450"/>
				</div>
				<Button type="primary" block onClick={this.takePhoto}>{this.props.btnContent}</Button>
			</div>
		)
	}
}

export default CameraFeed
