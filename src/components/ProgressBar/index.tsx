import { FC } from 'react';
import { ProgressBarWrap, Circle } from './styles';

interface Props {
	totalCount: number;
	currentStep: number;
}

const ProgressBar: FC<Props> = ({ totalCount, currentStep }) => {
	return (
		<ProgressBarWrap>
			{Array(totalCount)
				.fill(null)
				.map((_, index) => (
					<Circle
						key={index}
						passed={currentStep > index + 1}
						active={currentStep === index + 1}
					>
						{index + 1}
					</Circle>
				))}
		</ProgressBarWrap>
	);
};

export default ProgressBar;
