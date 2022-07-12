import styled, { css, keyframes } from 'styled-components';
import { Color } from '../../constants/styles';
import { indent } from '../../constants/sizes';

export const getTypeStyle = (type: string) => {
	switch (type) {
		case 'high':
			return css`
				background-color: ${Color.lightBlue};
				color: ${Color.blue};

				&:before, &:after {
					border: 1px solid ${Color.blue};
				}
			`;
		case 'medium':
			return css`
				background-color: ${Color.lightYellow};
				color: ${Color.yellow};

				&:before, &:after {
					border: 1px solid ${Color.yellow};
				}
			`;
		default:
			return css`
				background-color: ${Color.lightRed};
				color: ${Color.red};

				&:before, &:after {
					border: 1px solid ${Color.red};
				}
			`;
	}
};

const pulse = keyframes`
    0% {
        transform: scale(0.7);
        opacity: 0
    }

    50% {
        transform: scale(0.9);
        opacity: 1
    }

    100% {
        transform: scale(1.1);
        opacity: 0
    }
`;

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

interface CounterProps {
	type: 'low' | 'medium' | 'high';
}

export const Counter = styled.div<CounterProps>`
	width: 120px;
	height: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 36px;
	font-weight: 700;
	border-radius: 50%;
	margin-bottom: ${indent(2)};
	position: relative;
	${({ type }) => getTypeStyle(type)};

	&:before {
		content: '';
		position: absolute;
		width: calc(100% + 20px);
		height: calc(100% + 20px);
		border-radius: 50%;
		animation: ${pulse} 1s linear infinite;
	}

	&:after {
		content: '';
		position: absolute;
		width: calc(100% + 20px);
		height: calc(100% + 20px);
		border-radius: 50%;
		animation: ${pulse} 1s linear infinite;
		animation-delay: 0.2s;
	}
`;

export const Title = styled.h2`
	font-size: 24px;
	margin-bottom: ${indent(2)};
	color: ${Color.gray};
	margin-top: ${indent(0.5)};
`;
