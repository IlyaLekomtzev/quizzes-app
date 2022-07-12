import styled, { createGlobalStyle } from 'styled-components';
import { indent } from './sizes';

export enum Color {
    white = '#fff',
    black = '#111',
    gray = '#666',
    blue = '#0070f3',
    red = '#ff3333',
    yellow = '#ffcc00',
    lightGray = '#f0f0f0',
    lightBlue = '#ebf4ff',
    lightYellow = '#fffae6',
    lightRed = '#ffe6e6'
}

export const transition = 'all .2s linear';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        color: ${Color.black};
        overflow-x: hidden;
    }
`;

export const Wrapper = styled.div`
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	padding: ${indent(4)} 0;
`;

export const Title = styled.h1`
	font-size: 64px;
	font-weight: 800;
	text-align: center;
	margin-bottom: ${indent(2)};
`;
