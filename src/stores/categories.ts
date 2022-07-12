import { createEffect, createStore } from 'effector';
import { ApiRoute } from '../constants/routes';
import client from '../services/axios';
import { CategoriesResponse, Category } from '../types/models/api';

const getCategoriesFx = createEffect(async () => {
	const { data } = await client.get<CategoriesResponse>(ApiRoute.categories);
	return data.trivia_categories;
});

const $categories = createStore<Category[]>([])
    .on(getCategoriesFx.doneData, (_, payload) => payload);

const categoriesEffects = {
	getCategoriesFx,
};

const categoriesStores = {
	$categories,
};

export { categoriesEffects, categoriesStores };
