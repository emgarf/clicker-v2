import useAutomations from './useAutomations.ts';
import Item from '../common/Item';

export default function AutomationsList() {
	const { automations, buyAutomation, canAffordAutomation } = useAutomations();

	return (
		<div>
			<h2>Automations</h2>
			<div>
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
