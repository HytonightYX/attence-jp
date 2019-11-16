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
import './less/variables.less';

configure({enforceActions: 'observed'})

ReactDOM.render(
	<Provider {...injects}>
		<ConfigProvider locale={zhCN}>
			<App/>
		</ConfigProvider>
	</Provider>,
	document.getElementById('root')
)
