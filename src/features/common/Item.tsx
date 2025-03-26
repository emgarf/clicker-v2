import { Upgrade, Automation } from '../../types/game';
import './item.css';

interface UpgradeItemProps {
	item: Upgrade | Automation;
	onBuy: (upgradeId: string) => void;
	canAfford: boolean;
}

function isUpgrade(item: Upgrade | Automation) {
	if ('multiplier' in item) {
		return <p>Multiplier: +{item.multiplier}</p>;
	}
	return <p>Income: {item.incomePerSecond.toFixed(2)} cakes/s</p>;
}

export default function Item({ item, onBuy, canAfford }: UpgradeItemProps) {
	return (
		<div className={`item ${canAfford ? 'visible' : 'hidden'}`}>
			<div className="item__infos">
				<div>
					<h3>{item.name}</h3>
					<p>Price: {item.currentPrice.toFixed(2)} cakes</p>
				</div>
				<div>
					{isUpgrade(item)}
					<p>Owned: {item.count}</p>
				</div>
			</div>
			<button className="button" onClick={() => onBuy(item.id)} disabled={!canAfford}>
				Buy
			</button>
		</div>
	);
}
