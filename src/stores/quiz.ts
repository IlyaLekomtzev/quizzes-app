import { createEffect, createEvent, createStore } from 'effector';
import { ApiRoute } from '../constants/routes';
import client from '../services/axios';
import { Question, QuestionsResponse } from '../types/models/api';
import { Answer } from '../types/models/quiz';

export const setCurrentQuestion = createEvent<Question>();
export const setCurrentStep = createEvent<number>();
export const incrementCurrentStep = createEvent();
export const incrementRightAnswersCount = createEvent();
export const addRightAnswer = createEvent<Omit<Answer, 'right'>>();
export const addWrongAnswer = createEvent<Omit<Answer, 'right'>>();
export const finishQuiz = createEvent();
export const leaveQuiz = createEvent();

const getQuestionsFx = createEffect(async (id: string) => {
	const { data } = await client.get<QuestionsResponse>(ApiRoute.questions, {
		params: {
			category: id,
			amount: 5,
		},
	});

	if (data.response_code === 0) {
		return data.results;
	}

	return [];
});

const $questions = createStore<Question[]>([])
	.on(getQuestionsFx.doneData, (_, payload) => payload)
	.reset(leaveQuiz);

const $currentStep = createStore<number>(0)
	.on(setCurrentStep, (_, index) => index)
	.on(incrementCurrentStep, (state) => state + 1)
	.reset(leaveQuiz);

const $currentQuestion = createStore<Question | null>(null)
	.on(setCurrentQuestion, (_, question) => question)
	.reset(leaveQuiz);

const $rightAnswersCount = createStore<number>(0)
	.on(incrementRightAnswersCount, (state) => state + 1)
	.reset(leaveQuiz);

const $isSuccess = createStore<boolean>(false)
	.on(finishQuiz, (_) => true)
	.reset(leaveQuiz);

const $currentAnswers = createStore<Answer[]>([])
	.on(addRightAnswer, (state, answer) => [
		...state,
		{
			...answer,
			right: true,
		},
	])
	.on(addWrongAnswer, (state, answer) => [
		...state,
		{
			...answer,
			right: false,
		},
	])
	.reset(leaveQuiz);

const quizEvents = {
	setCurrentQuestion,
	setCurrentStep,
	incrementCurrentStep,
	incrementRightAnswersCount,
	addRightAnswer,
	addWrongAnswer,
	leaveQuiz,
	finishQuiz,
};

const quizEffects = {
	getQuestionsFx,
};

const quizStores = {
	$questions,
	$currentQuestion,
	$currentStep,
	$rightAnswersCount,
	$isSuccess,
	$currentAnswers,
};

export { quizEvents, quizEffects, quizStores };
