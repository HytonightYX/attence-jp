import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from './component/Loadable'
import NavWrapper from 'component/NavWrapper'

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/reg'   component={Loadable({ loader: () => import('./app/register') })} />
					<Route exact path='/login' component={Loadable({ loader: () => import('./app/login') })} />
					<Route path='/' render={() => (
						<div className='app-root'>
							<NavWrapper>
								<Switch>
									<Route exact path='/' component={Loadable({ loader: () => import('./app/main') })}/>
								</Switch>
							</NavWrapper>
						</div>
					)}/>
				</Switch>
			</Router>
		)
	}
}

export default App
