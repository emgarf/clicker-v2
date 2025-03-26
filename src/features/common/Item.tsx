import React from 'react';
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
	return <p>Income: {item.incomePerSecond.toFixed(0)} cakes/s</p>;
}

export default React.memo(({ item, onBuy, canAfford }: UpgradeItemProps) => {
	return (
		<div className={`item ${canAfford ? 'visible' : 'hidden grey'}`}>
			<div className="item__infos">
				<div>
					<b>{item.name}</b>
					<p>Price: {item.currentPrice.toFixed(0)} cakes</p>
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
});
