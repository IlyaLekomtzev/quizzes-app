import React from 'react';
import ReactDOM from 'react-dom/client';
import { Normalize } from 'styled-normalize';
import App from './App';
import { GlobalStyle } from './constants/styles';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<>
        <Normalize />
		<GlobalStyle />
		<App />
	</>
);
