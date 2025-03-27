import useUpgrades from './useUpgrades.ts';
import Item from '../common/Item';
import { useGame } from '../../context/Game.tsx';

export default function UpgradesList() {
	const { state } = useGame();
	const { buyUpgrade, canAffordUpgrade } = useUpgrades();

	return (
		<div>
			<h2>Upgrades</h2>
			<div>
				{Object.values(state.upgrades).map((upgrade, index) => (
					<Item
						key={upgrade.id}
						item={upgrade}
						onBuy={buyUpgrade}
						canAfford={index === 0 ? true : canAffordUpgrade(upgrade)}
					/>
				))}
			</div>
		</div>
	);
}
