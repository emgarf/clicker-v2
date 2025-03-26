import useAutomations from './useAutomations.ts';
import Item from '../common/Item';

export function AutomationsList() {
	const { automations, buyAutomation, canAffordAutomation } = useAutomations();

	return (
		<div className="automations__list">
			<h2>Automations</h2>
			<div className="automations__container">
				{automations.map((automation, index) => (
					<Item
						key={automation.id}
						item={automation}
						onBuy={buyAutomation}
						canAfford={index === 0 ? true : canAffordAutomation(automation)}
					/>
				))}
			</div>
		</div>
	);
}
