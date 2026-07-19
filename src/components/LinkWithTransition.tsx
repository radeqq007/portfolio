import type { LinkProps } from "react-router";
import { Link, useNavigate } from "react-router";
import { useTransistion } from "@/hooks/useTransition";

const LinkWithTransition = ({ to, onClick, ...rest }: LinkProps) => {
	const navigate = useNavigate();
	const { play } = useTransistion();

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		play(() => {
			navigate(to);
		});
	};

	return <Link to={to} {...rest} onClick={handleClick} {...rest} />;
};

export default LinkWithTransition;
