import { Wrapper } from './styles';
import { ReactSVG } from 'react-svg';

const Loader = () => {
	return (
		<Wrapper>
			<ReactSVG width="30px" height="30px" src="assets/loader.svg" />
		</Wrapper>
	);
};

export default Loader;
