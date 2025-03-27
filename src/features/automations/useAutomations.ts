import { useCallback } from 'react';
import { useGame } from '../../context/Game';
import { Automation } from '../../types/game';

export default function useAutomations() {
	const { state, dispatch } = useGame();

	const buyAutomation = useCallback(
		(automationId: string) => {
			dispatch({ type: 'BUY_AUTOMATION', automationId });
		},
		[dispatch]
	);

	const canAffordAutomation = useCallback(
		(automation: Automation) => {
			if (automation.count > 0) return true;
			return state.cake >= automation.currentPrice;
		},
		[state.cake]
	);

	return {
		buyAutomation,
		canAffordAutomation,
	};
}
