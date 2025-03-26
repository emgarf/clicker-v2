import { Automation } from '../../types/game';
// import './automations.css';

interface AutomationItemProps {
	automation: Automation;
	onBuy: (automationId: string) => void;
	canAfford: boolean;
}

export function AutomationItem({ automation, onBuy, canAfford }: AutomationItemProps) {
	return (
		<div className={`automation-item ${canAfford ? 'visible' : 'hidden'}`}>
			<div className="automation-info">
				<h3>{automation.name}</h3>
				<p>Price: {automation.currentPrice.toFixed(2)} cakes</p>
				<p>Income: {automation.incomePerSecond.toFixed(2)} cakes/s</p>
				<p>Owned: {automation.count}</p>
			</div>
			<button className="buy-button" onClick={() => onBuy(automation.id)} disabled={!canAfford}>
				Buy
			</button>
		</div>
	);
}
