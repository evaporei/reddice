import React from 'react'
import { render } from 'react-dom'

import { Router, browserHistory } from 'react-router'
import routes from './routes'

render(
    <Router history={browserHistory} routes={routes} />,
    window.document.getElementById('app')
);

    // {/*<Router history={createBrowserHistory()}>
    //     <Routes />
    // </Router>,*/}