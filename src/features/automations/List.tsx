import useAutomations from './useAutomations.ts';
import Item from '../common/Item';
import { useGame } from '../../context/Game.tsx';

export default function AutomationsList() {
	const { state } = useGame();

	const { buyAutomation, canAffordAutomation } = useAutomations();

	return (
		<div>
			<h2>Automations</h2>
			<div>
				{Object.values(state.automations).map((automation, index) => (
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
