import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { indent } from '../../constants/sizes';
import { Color, transition } from '../../constants/styles';

const buttonStyles = css`
	padding: ${indent(0.5)} ${indent()};
	font-size: 18px;
	text-align: center;
	border: 1px solid ${Color.blue};
	border-radius: 5px;
	background-color: ${Color.white};
	color: ${Color.blue};
	text-decoration: none;
	transition: ${transition};
    cursor: pointer;

	&:hover {
		background-color: ${Color.blue};
		color: ${Color.white};
	}

    &:disabled {
		opacity: .5;
        cursor: not-allowed;
	}
`;

export const ButtonLink = styled(Link)`
    ${buttonStyles};
`;

export const ButtonStyled = styled.button`
    ${buttonStyles};
`;
