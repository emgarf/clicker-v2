import { useCallback } from 'react';
import { useGame } from '../../context/Game';

export default function useClickHandler() {
	const { dispatch } = useGame();

	const handleClick = useCallback(() => {
		dispatch({ type: 'CLICK' });
	}, [dispatch]);

	return { handleClick };
}
