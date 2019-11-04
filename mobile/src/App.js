import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import NavWrapper from '@component/NavWrapper'
import login from '@app/login'
import register from '@app/register'

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route path='/' render={() => (
						<div className='app-root'>
							<Route exact path='/' component={login}/>
							<Route exact path='/register' component={register}/>
						</div>
					)}/>
				</Switch>
			</Router>
		)
	}
}

export default App
