import styled from 'styled-components';
import { indent } from '../../constants/sizes';
import { Color, transition } from '../../constants/styles';

export const Box = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Title = styled.h2`
	font-size: 24px;
    margin-bottom: ${indent(2)};
    color: ${Color.gray};
    margin-top: ${indent(0.5)};
`;

export const LabelsWrap = styled.div`
	width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${indent()};
    margin-bottom: ${indent(2)};
`;

interface LabelProps {
    active?: boolean;
}

export const Label = styled.label<LabelProps>`
    display: flex;
    align-items: center;
	font-size: 18px;
    color: ${Color.gray};
    padding: ${indent(0.5)};
    border: 1px solid ${({active}) => active ? Color.blue : Color.lightGray};
    background-color: ${({active}) => active ? Color.lightBlue : Color.white};
	border-radius: 5px;
    gap: ${indent()};
    transition: ${transition};
    cursor: pointer;

    &:hover {
        border-color: ${Color.blue};
        background-color: ${Color.lightBlue};
    }
`;

export const Buttons = styled.div`
	width: 100%;
    display: flex;
    align-items: center;
    gap: ${indent()};
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${indent(0.75)};
`;

export const Tag = styled.div`
    font-size: 14px;
    padding: ${indent(0.4)} ${indent(0.75)};
    color: ${Color.blue};
    background-color: ${Color.lightBlue};
    border-radius: 3px;
`;
