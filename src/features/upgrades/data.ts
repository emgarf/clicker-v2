import { Upgrade } from '../../types/game.ts';

export const initialUpgrades: Record<string, Upgrade> = {
	'better-finger': {
		id: 'better-finger',
		name: 'Better Finger',
		basePrice: 10,
		currentPrice: 10,
		multiplier: 1,
		count: 0,
		costIncreaseFactor: 1.15,
	},
	'stronger-hand': {
		id: 'stronger-hand',
		name: 'Stronger Hand',
		basePrice: 50,
		currentPrice: 50,
		multiplier: 5,
		count: 0,
		costIncreaseFactor: 1.15,
	},
	'clicker-training': {
		id: 'clicker-training',
		name: 'Clicker Training',
		basePrice: 200,
		currentPrice: 200,
		multiplier: 20,
		count: 0,
		costIncreaseFactor: 1.15,
	},
	'clicking-robot': {
		id: 'clicking-robot',
		name: 'Clicking Robot',
		basePrice: 1000,
		currentPrice: 1000,
		multiplier: 100,
		count: 0,
		costIncreaseFactor: 1.15,
	},
};
