import { useEffect, useMemo } from 'react';
import { useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { quizEffects, quizStores, quizEvents } from '../../stores/quiz';
import Question from '../../components/Question';
import Loader from '../../components/Loader';
import SuccessQuiz from '../../components/SuccessQuiz';
import ProgressBar from '../../components/ProgressBar';
import { Title, Wrapper } from '../../constants/styles';

const {
	setCurrentQuestion,
	setCurrentStep,
	leaveQuiz,
	incrementCurrentStep,
	incrementRightAnswersCount,
	finishQuiz,
	addRightAnswer,
	addWrongAnswer,
} = quizEvents;
const { getQuestionsFx } = quizEffects;
const { $questions, $currentQuestion, $currentStep, $isSuccess } = quizStores;

const QuizPage = () => {
	const { id } = useParams();
	const questions = useStore($questions);
	const isLoading = useStore(getQuestionsFx.pending);
	const currentQuestion = useStore($currentQuestion);
	const currentStep = useStore($currentStep);
	const isSuccess = useStore($isSuccess);

	const title = useMemo(() => {
		if (id) {
			return currentQuestion?.category || '';
		}

		return '';
	}, [currentQuestion, id]);

	useEffect(() => () => leaveQuiz(), []);

	useEffect(() => {
		if (id) {
			getQuestionsFx(id);
		}
	}, [id]);

	useEffect(() => {
		if (questions.length > 0) {
			setCurrentQuestion(questions[0]);
			setCurrentStep(0);
		}
	}, [questions]);

	const handleQuestionSubmit = (answer: string) => {
		if (currentQuestion) {
			if (answer === currentQuestion.correct_answer) {
				incrementRightAnswersCount();
				addRightAnswer({
					question: currentQuestion.question,
					answer,
				});
			} else {
				addWrongAnswer({
					question: currentQuestion.question,
					answer,
				});
			}
		}

		if (currentStep + 1 < questions.length) {
			incrementCurrentStep();
			setCurrentQuestion(questions[currentStep + 1]);
		} else {
			finishQuiz();
		}
	};

	if (isLoading) {
		return (
			<Wrapper>
				<Loader />
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<Title>{title}</Title>

			<AnimatePresence>
				{!isSuccess ? (
					<motion.div
						key={currentStep}
						initial={{
							x: -500,
							opacity: 0,
						}}
						animate={{
							x: 0,
							opacity: 1,
						}}
						exit={{
							x: 500,
							opacity: 0,
							position: 'absolute',
						}}
					>
						<Question onSubmit={handleQuestionSubmit} />
					</motion.div>
				) : (
					<motion.div
						initial={{
							x: -500,
							opacity: 0,
						}}
						animate={{
							x: 0,
							opacity: 1,
						}}
					>
						<SuccessQuiz />
					</motion.div>
				)}
			</AnimatePresence>

			{!isSuccess && (
				<ProgressBar
					totalCount={questions.length}
					currentStep={currentStep + 1}
				/>
			)}
		</Wrapper>
	);
};

export default QuizPage;
