import { useStore } from 'effector-react';
import { quizStores } from '../../stores/quiz';
import { Answer, Answers, Question, Text } from './styles';

const { $currentAnswers } = quizStores;

const AnswerList = () => {
	const currentAnswers = useStore($currentAnswers);

	if (!currentAnswers.length) {
		return null;
	}

	return (
		<Answers>
			{currentAnswers.map((item, index) => (
				<Answer key={index} right={item.right}>
					<Question
						dangerouslySetInnerHTML={{
							__html: item.question,
						}}
					/>

					<Text
						dangerouslySetInnerHTML={{
							__html: item.answer,
						}}
					/>
				</Answer>
			))}
		</Answers>
	);
};

export default AnswerList;
