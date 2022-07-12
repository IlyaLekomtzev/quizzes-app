import { useStore } from 'effector-react';
import { main } from '../../constants/routes';
import { quizStores } from '../../stores/quiz';
import { getFinishType } from '../../utils';
import AnswerList from '../AnswerList';
import Button from '../Button';
import { Counter, Wrapper, Title } from './styles';

const { $questions, $rightAnswersCount } = quizStores;

const SuccessQuiz = () => {
	const questions = useStore($questions);
	const rightAnswersCount = useStore($rightAnswersCount);

	return (
		<Wrapper>
            <Title>Your result</Title>
			<Counter type={getFinishType(rightAnswersCount, questions.length)}>
				{rightAnswersCount} / {questions.length}
			</Counter>
			<AnswerList />
            <Button href={main}>Home</Button>
		</Wrapper>
	);
};

export default SuccessQuiz;
