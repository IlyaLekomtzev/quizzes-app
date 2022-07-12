export interface Question {
    category: string;
    type: 'multiple' | 'boolean';
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface QuestionsResponse {
    response_code: 0 | 1 | 2 | 3 | 4;
    results: Question[];
}

export interface Category {
    id: number;
    name: string;
}

export interface CategoriesResponse {
    trivia_categories: Category[];
}