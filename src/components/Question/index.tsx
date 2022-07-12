import { ChangeEvent, FC, useMemo, useState } from 'react';
import { useStore } from 'effector-react';
import Button from '../Button';
import { quizStores } from '../../stores/quiz';
import { Box, Label, LabelsWrap, Title, Buttons, Tag, Tags } from './styles';
import { main } from '../../constants/routes';
import { shuffleArray } from '../../utils';

const { $questions, $currentQuestion, $currentStep } = quizStores;

interface Props {
	onSubmit: (answer: string) => void;
}

const Question: FC<Props> = ({ onSubmit }) => {
	const [answer, setAnswer] = useState('');
	const currentQuestion = useStore($currentQuestion);
	const currentStep = useStore($currentStep);
	const questionsCount = useStore($questions).length;

	const answers = useMemo(() => {
		if (currentQuestion !== null) {
			return (
				shuffleArray([
					currentQuestion.correct_answer,
					...currentQuestion.incorrect_answers,
				]) || []
			);
		}

		return [];
	}, [currentQuestion]);

	const handleChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
		setAnswer(e.target.value);
	};

	const handleSubmitQuestion = () => {
		onSubmit(answer);
		setAnswer('');
	};

	if (currentQuestion === null) {
		return null;
	}

	return (
		<Box>
            <Tags>
                <Tag>{currentStep + 1} / {questionsCount}</Tag>
                <Tag>{currentQuestion.difficulty}</Tag>
            </Tags>

			<Title
				dangerouslySetInnerHTML={{
					__html: currentQuestion.question,
				}}
			/>

			{answers.length > 0 && (
				<LabelsWrap>
					{answers.map((item, index) => (
						<Label active={answer === item} key={index}>
							<input
								type='radio'
								name='answer'
								value={item}
								onChange={handleChangeAnswer}
								checked={answer === item}
							/>
							<span dangerouslySetInnerHTML={{
                                __html: item,
                            }} />
						</Label>
					))}
				</LabelsWrap>
			)}

			<Buttons>
				<Button href={main}>Stop</Button>
				<Button onClick={handleSubmitQuestion} disabled={!answer}>
					{currentStep + 1 === questionsCount ? 'Submit' : 'Next'}
				</Button>
			</Buttons>
		</Box>
	);
};

export default Question;
