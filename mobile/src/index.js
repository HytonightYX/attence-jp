import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { configure } from 'mobx'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import jaJP from 'antd/es/locale/ja_JP'
import 'moment/locale/zh-cn'

import injects from './store'
import App from './App'

import './less/global.less'
import './less/variables.less'

configure({enforceActions: 'observed'})

/* polyfill: 安卓部分老版本游览器缺失 promise.prototype.finally 方法 */
require('promise.prototype.finally').shim()

ReactDOM.render(
	<Provider {...injects}>
		<ConfigProvider locale={zhCN}>
			<App/>
		</ConfigProvider>
	</Provider>,
	document.getElementById('root')
)
