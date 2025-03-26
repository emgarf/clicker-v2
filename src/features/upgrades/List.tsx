import useUpgrades from './useUpgrades.ts';
import Item from '../common/Item';

export function UpgradesList() {
	const { upgrades, buyUpgrade, canAffordUpgrade } = useUpgrades();

	return (
		<div>
			<h2>Upgrades</h2>
			<div>
				{upgrades.map((upgrade, index) => (
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
