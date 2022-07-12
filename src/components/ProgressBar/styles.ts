import styled, { css } from 'styled-components';
import { indent } from '../../constants/sizes';
import { Color, transition } from '../../constants/styles';

export const ProgressBarWrap = styled.div`
	position: absolute;
    top: 50%;
    right: ${indent()};
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: ${indent(0.5)};
`;

interface CircleProps {
    active: boolean;
    passed: boolean;
}

const activeStyles = css`
    border-color: ${Color.blue};
`;

const passedStyles = css`
    border-color: ${Color.blue};
    background-color: ${Color.blue};
    color: ${Color.white};
`;

export const Circle = styled.div<CircleProps>`
	width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${Color.lightGray};
    border-radius: 50%;
    transition: ${transition};

    ${({active}) => active && activeStyles}
    ${({passed}) => passed && passedStyles}
`;