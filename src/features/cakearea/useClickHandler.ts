import { useGame } from '../../context/Game';

export default function useClickHandler() {
	const { dispatch } = useGame();

	const handleClick = () => {
		dispatch({ type: 'CLICK' });
	};

	return { handleClick };
}
