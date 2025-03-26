import { Automation } from '../../types/game.ts';

export const initialAutomations: Record<string, Automation> = {
	'auto-clicker': {
		id: 'auto-clicker',
		name: 'Auto Clicker',
		basePrice: 15,
		currentPrice: 15,
		incomePerSecond: 1,
		count: 0,
		costIncreaseFactor: 1.15,
	},
	'click-farm': {
		id: 'click-farm',
		name: 'Click Farm',
		basePrice: 100,
		currentPrice: 100,
		incomePerSecond: 8,
		count: 0,
		costIncreaseFactor: 1.15,
	},
	'click-factory': {
		id: 'click-factory',
		name: 'Click Factory',
		basePrice: 500,
		currentPrice: 500,
		incomePerSecond: 40,
		count: 0,
		costIncreaseFactor: 1.15,
	},
	'click-corporation': {
		id: 'click-corporation',
		name: 'Click Corporation',
		basePrice: 3000,
		currentPrice: 3000,
		incomePerSecond: 250,
		count: 0,
		costIncreaseFactor: 1.15,
	},
};
