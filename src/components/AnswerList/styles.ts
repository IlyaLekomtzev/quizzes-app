import styled from 'styled-components';
import { indent } from '../../constants/sizes';
import { Color } from '../../constants/styles';

export const Answers = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
    gap: ${indent()};
    margin-bottom: ${indent(2)};
`;

interface AnswerProps {
    right: boolean;
}

export const Answer = styled.div<AnswerProps>`
	width: 100%;
    padding: ${indent()};
    border: 1px solid ${({right}) => right ? Color.blue : Color.red};
    background-color: ${({right}) => right ? Color.lightBlue : Color.lightRed};
    border-radius: 5px;
`;

export const Question = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${Color.gray};
`;

export const Text = styled.div`
    font-size: 16px;
    margin-top: ${indent(0.5)};
`;