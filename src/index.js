import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

/* css */
import './css/index.less';

/* route */
import Home from './route/home.js';

class Index extends Component {
    render () {
        return (
            <HashRouter>
                <Route path='/' component={Home} />
            </HashRouter>
        );
    };
};

render((<Index />), document.getElementById('main'));
