import React from 'react';
import ReactDOM from 'react-dom/client.js';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
