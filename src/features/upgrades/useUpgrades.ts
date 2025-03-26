import { useCallback } from 'react';
import { useGame } from '../../context/Game';
import { Upgrade } from '../../types/game';

export default function useUpgrades() {
	const { state, dispatch } = useGame();

	const buyUpgrade = useCallback(
		(upgradeId: string) => {
			dispatch({ type: 'BUY_UPGRADE', upgradeId });
		},
		[dispatch]
	);

	const canAffordUpgrade = useCallback(
		(upgrade: Upgrade) => {
			if (upgrade.count > 0) return true;
			return state.cake >= upgrade.currentPrice;
		},
		[state.cake]
	);

	return {
		upgrades: Object.values(state.upgrades),
		buyUpgrade,
		canAffordUpgrade,
	};
}
