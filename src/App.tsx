import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from './constants/routes';
import MainPage from './pages/Main';
import QuizPage from './pages/Quiz';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={AppRoute.main} element={<MainPage />} />
                    <Route path={AppRoute.quiz} element={<QuizPage />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
