'use strict';

import MdBox from './testMd.js';

var Link = ReactRouterDOM.Link;
var Route = ReactRouterDOM.Route;
var Switch = ReactRouterDOM.Switch;

var ProjPage = function ProjPage() {
    return React.createElement(
        ReactRouterDOM.HashRouter,
        null,
        React.createElement(
            Switch,
            null,
            React.createElement(
                Route,
                { exact: true, path: '/' },
                React.createElement(
                    'div',
                    { 'class': 'window-container' },
                    React.createElement(
                        'div',
                        { 'class': 'projName' },
                        React.createElement(
                            Link,
                            { to: '/membranas' },
                            'Membranas'
                        )
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'top-window' },
                        React.createElement('div', { 'class': 'left-shutter-outter outter-shutters' }),
                        React.createElement(
                            'div',
                            { 'class': 'project-window' },
                            React.createElement(
                                'div',
                                { 'class': 'proj-window-top' },
                                React.createElement('div', { 'class': 'left-shutter-inner inner-shutters' }),
                                React.createElement('div', { 'class': 'right-shutter-inner inner-shutters' }),
                                React.createElement(
                                    'div',
                                    { 'class': 'projimg' },
                                    React.createElement('img', { src: './projects/${projList[projName][1]}/${projList[projName][1]}.png',
                                        alt: 'pic of me!' })
                                )
                            ),
                            React.createElement('div', { 'class': 'bottom-window' })
                        ),
                        React.createElement('div', { 'class': 'right-shutter-outter outter-shutters' })
                    )
                )
            ),
            React.createElement(
                Route,
                { path: '/membranas' },
                React.createElement(MdBox, { mdFile: 'membranas' })
            )
        )
    );
};

var domContainer = document.getElementsByClassName("project-lists")[0];
ReactDOM.render(React.createElement(ProjPage, null), domContainer);