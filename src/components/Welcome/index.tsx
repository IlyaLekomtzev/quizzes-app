import { useEffect } from 'react';
import { useStore } from 'effector-react';
import Button from '../Button';
import Loader from '../Loader';
import { quiz } from '../../constants/routes';
import { categoriesStores } from '../../stores/categories';
import { categoriesEffects } from '../../stores/categories';
import { Title, Wrapper } from '../../constants/styles';
import { Links } from './styles';

const { getCategoriesFx } = categoriesEffects;
const { $categories } = categoriesStores;

const Welcome = () => {
	const categories = useStore($categories);
    const isLoading = useStore(getCategoriesFx.pending);

    useEffect(() => {
        if (!categories.length) {
            getCategoriesFx();
        }
	}, [categories]);

	return (
		<Wrapper>
			<Title>The Quizzes</Title>

            {isLoading && <Loader />}
			{!isLoading && categories.length > 0 && (
				<Links>
					{categories.map(({ id, name }) => (
						<Button key={id} href={`${quiz}/${id}`}>
							{name}
						</Button>
					))}
				</Links>
			)}
		</Wrapper>
	);
};

export default Welcome;
