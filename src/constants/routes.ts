export const apiUrl = 'https://opentdb.com';

export const main = '/';
export const quiz = '/quiz'

export enum AppRoute {
    main = '/',
    quiz = '/quiz/:id'
}

export enum ApiRoute {
    categories = '/api_category.php',
    questions = '/api.php'
}