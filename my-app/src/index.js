import React from 'react';
import ReactDOM from 'react-dom';
import IndexComponent from './components/IndexComponent.jsx';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';

import configureStore from './Store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={configureStore}>
		<IndexComponent />
	</Provider>,
	document.getElementById('root')
);