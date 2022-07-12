import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { ButtonLink, ButtonStyled } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	href?: string;
	children?: ReactNode;
}

const Button: FC<Props> = ({ children, href, ...props }) => {
	return href ? (
		<ButtonLink to={href}>{children}</ButtonLink>
	) : (
		<ButtonStyled {...props}>
			{children}
		</ButtonStyled>
	);
};

export default Button;
